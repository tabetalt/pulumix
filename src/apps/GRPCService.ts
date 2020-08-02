import * as pulumi from '@pulumi/pulumi';
import * as k8s from '@pulumi/kubernetes';
import * as semver from 'semver';
import * as kx from '@pulumi/kubernetesx';
import { Mapping, MappingSpec } from '../ambassador/Mapping';
import { Config } from '../helpers/Config';

export interface GRPCServiceSpec {
  /**
   * Environment variables
   */
  env?: kx.types.EnvMap;

  /**
   * Namespace
   */
  namespace?: pulumi.Input<string>;

  /**
   * Version
   * default to: process.env.VERSION || dev
   */
  version?: pulumi.Input<string>;

  /**
   * Domain
   * defaults to: <name>.<mayor-version>.<default-domain>
   */
  domain?: pulumi.Input<string>;

  /**
   * Docker image name.
   * More info: https://kubernetes.io/docs/concepts/containers/images
   */
  image: pulumi.Input<string>;

  /**
   * Ports
   */
  ports: kx.types.Container['ports'];

  /**
   * Mapping Resource
   * defaults to:
   *  - serviceName: <name>-service
   *  - host: <domain>
   *  - bypassAuth: false
   *  - servicePort: <port>
   */
  mapping?: MappingSpec;
}

/**
 * Apps.Service
 *
 * Generic service consisting of best practise deployment, service and Ambassador Mapping.
 *
 * @example
 * ```typescript
 * import * as pulumix from '@tabetalt/pulumix';
 *
 * const service = new pulumix.apps.Service('account', {
 *  image: 'busybox',
 *  domain: 'busy.example.com',
 * });
 * ```
 */
export class GRPCService extends pulumi.ComponentResource {
  private readonly name: string;
  private readonly opts?: pulumi.CustomResourceOptions;

  readonly deployment: kx.Deployment;
  readonly service: kx.Service;
  readonly mapping: Mapping;

  constructor(
    name: string,
    args: GRPCServiceSpec,
    opts?: pulumi.CustomResourceOptions,
    config?: Config
  ) {
    super('apps:grpc-service', name, args, opts);

    config = config || new Config();

    const {
      ports,
      version = process.env.VERSION || 'dev',
      namespace,
      env = {},
      image,
    } = args;

    env.APP_VERSION = version;

    const pb = new kx.PodBuilder({
      containers: [
        {
          env,
          image,
          ports,
        },
      ],
    });

    this.deployment = new kx.Deployment(
      `${name}-deployment`,
      {
        metadata: {
          namespace,
          annotations: {
            'app-version': version,
          },
        },
        spec: pb.asDeploymentSpec(),
      },
      {
        parent: this,
      }
    );

    const serviceSpec = this.deployment.spec.template.spec.containers.apply(
      (containers) => {
        // TODO: handle merging ports from args
        const ports: Record<string, number> = {};
        containers.forEach((container) => {
          if (container.ports) {
            container.ports.forEach((port) => {
              ports[port.name] = port.containerPort;
            });
          }
        });
        return {
          ports,
          selector: this.deployment.spec.selector.matchLabels,
          type: kx.types.ServiceType.ClusterIP,
        };
      }
    );

    this.service = new kx.Service(
      `${name}-service`,
      {
        metadata: { name, namespace },
        spec: serviceSpec,
      },
      { ...this.opts, parent: this }
    );

    this.opts = opts;
  }
}
