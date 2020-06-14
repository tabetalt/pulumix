import * as pulumi from '@pulumi/pulumi';
import * as kx from '@pulumi/kubernetesx';
import { Mapping, MappingSpec } from '../ambassador/Mapping';

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

  private readonly deployment: kx.Deployment;
  private readonly service: kx.Service;
  private readonly mapping: Mapping;

  constructor(
    name: string,
    args: ServiceSpec,
    opts?: pulumi.CustomResourceOptions
  ) {
    super('apps:service', name, opts);

    const config = new pulumi.Config();

    const coreDomain = config.get('coreDomain') || process.env.CORE_DOMAIN;

    if (!coreDomain) {
      throw new Error(
        'Please set coreDomain by either defining it as a environment variable or Pulumi config'
      );
    }

    const {
      port = 8080,
      version = process.env.VERSION || 'dev',
      domain = `${name}.${version}.${coreDomain}`,
      env,
      image,
      mapping = {
        serviceName: `${name}-service`,
        host: domain,
        bypassAuth: false,
        servicePort: port,
      },
    } = args;

    const pb = new kx.PodBuilder({
      containers: [
        {
          env,
          image,
          ports: { http: port },
        },
      ],
    });

    this.deployment = new kx.Deployment(`${name}-deployment`, {
      spec: pb.asDeploymentSpec(),
    });

    this.service = this.deployment.createService({
      type: kx.types.ServiceType.LoadBalancer,
    });

    this.mapping = new Mapping(`${name}-mapping`, mapping, {
      ...opts,
      parent: this,
    });

    this.opts = opts;
  }
}
