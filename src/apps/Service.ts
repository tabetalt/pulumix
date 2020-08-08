import * as pulumi from '@pulumi/pulumi';
import * as semver from 'semver';
import * as kx from '@pulumi/kubernetesx';
import { Mapping, MappingSpec } from '../ambassador/Mapping';
import { Config } from '../helpers/Config';
import { ServiceSecret } from '../iam/ServiceSecret';

export interface ServiceSpec {
  /**
   * Environment variables
   */
  env?: kx.types.EnvMap;

  /**
   * Version
   * default to: process.env.VERSION || dev
   */
  version?: pulumi.Input<string>;

  /**
   * GCP Service Account Secret Name
   *
   * This can be used in combination with iam.ServiceSecret.
   */
  serviceSecret?: ServiceSecret;

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
   * Port
   * defaults to: 8080
   */
  port?: pulumi.Input<number>;

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
export class Service extends pulumi.ComponentResource {
  private readonly name: string;
  private readonly opts?: pulumi.CustomResourceOptions;

  readonly deployment: kx.Deployment;
  readonly service: kx.Service;
  readonly mapping: Mapping;

  constructor(
    name: string,
    args: ServiceSpec,
    opts?: pulumi.CustomResourceOptions,
    config?: Config
  ) {
    super('apps:service', name, args, opts);

    config = config || new Config();

    const primaryDomain = config
      .get('primaryDomain')
      .apply((domain) => domain || process.env.PRIMARY_DOMAIN);

    const {
      port = 8080,
      version = process.env.VERSION || 'dev',
      domain = primaryDomain.apply((domain) => `${name}.${domain}`),
      env = {},
      image,
      serviceSecret,
      mapping = {
        serviceName: `${name}-service`,
        host: domain,
        bypassAuth: false,
        servicePort: port,
        prefix: pulumi
          .output(version)
          .apply((ver) => (ver == 'dev' ? 'dev' : `v${semver.major(ver)}`)),
      },
    } = args;

    env.APP_VERSION = version;

    const pb = new kx.PodBuilder({
      containers: [
        {
          env,
          image,
          ports: { http: port },
          volumeMounts: serviceSecret
            ? [serviceSecret.secret.mount('/var/run/secret/cloud.google.com/')]
            : [],
        },
      ],
    });

    this.deployment = new kx.Deployment(
      `${name}-deployment`,
      {
        metadata: {
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

    this.service = this.deployment.createService({
      type: kx.types.ServiceType.LoadBalancer,
    });

    this.mapping = new Mapping(`${name}-mapping`, mapping, {
      parent: this,
    });

    this.opts = opts;
  }
}
