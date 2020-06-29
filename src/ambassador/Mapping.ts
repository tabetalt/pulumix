import * as k8s from '@pulumi/kubernetes';
import * as pulumi from '@pulumi/pulumi';

export interface MappingSpec {
  namespace?: pulumi.Input<string>;
  /**
   * Prefix
   */
  prefix?: pulumi.Input<string>;
  /**
   * @example service.v1.api.service.com
   */
  host: pulumi.Input<string>;
  /**
   * Should we bypass authentication?
   */
  bypassAuth?: pulumi.Input<boolean>;
  /**
   * If true, tells the system that the service will be handling gRPC calls.
   */
  grpc?: pulumi.Input<boolean>;
  /**
   * Enables Cross-Origin Resource Sharing (CORS) setting on a mapping
   */
  cors?: {
    origins?: pulumi.Input<string[]>;
    methods?: pulumi.Input<string[]>;
    headers?: pulumi.Input<string[]>;
    credentials?: pulumi.Input<boolean>;
  };
  serviceName: pulumi.Input<string>;
  /**
   * Service Port
   * Defaults to 8080
   */
  servicePort?: pulumi.Input<number>;
  opts?: pulumi.ComponentResourceOptions;
  [T: string]: any;
}

export class Mapping extends k8s.apiextensions.CustomResource {
  constructor(
    name: string,
    args: MappingSpec,
    opts?: pulumi.ComponentResourceOptions
  ) {
    const {
      serviceName,
      servicePort = pulumi.output(8080),
      bypassAuth = false,
      grpc = false,
      cors,
      namespace = 'default',
      host,
      prefix = '/',
    } = args;
    super(
      name,
      {
        apiVersion: 'getambassador.io/v1',
        kind: 'Mapping',
        metadata: {
          name: serviceName,
          namespace,
        },
        spec: {
          prefix,
          host: pulumi.output(host).apply((host) => host.replace(/\.$/, '')),
          bypass_auth: bypassAuth,
          grpc,
          cors,
          service: pulumi
            .all([
              pulumi.output(namespace),
              pulumi.output(serviceName),
              pulumi.output(servicePort),
            ])
            .apply(([n, s, p]) => `http://${s}.${n}:${p}`),
        },
      },
      opts
    );
  }
}
