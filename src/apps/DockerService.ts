import * as docker from '@pulumi/docker';
import * as gcp from '@pulumi/gcp';
import * as pulumi from '@pulumi/pulumi';
import { Service, ServiceSpec } from './Service';
import { Config } from '../helpers/Config';

export interface DockerServiceSpec extends Omit<ServiceSpec, 'image'> {
  /**
   * Reference to Dockerfile
   */
  build: pulumi.Input<string | docker.DockerBuild>;
  /**
   * Version
   */
  version: string;
}

/**
 * Creates a Docker-based service
 *
 * @example
 * ```typescript
 * import * as pulumix from '@tabetalt/pulumix';
 * const dockerService = new pulumix.apps.DockerService('service', {
 *  build: '../backend',
 *  version: require('../package.json').version,
 * })
 * ```
 * @public
 */
export class DockerService extends pulumi.ComponentResource {
  private readonly name: string;
  private readonly opts?: pulumi.ComponentResourceOptions;

  readonly service: Service;
  readonly image: docker.Image;

  private args: DockerServiceSpec;

  constructor(
    name: string,
    args: DockerServiceSpec,
    opts?: pulumi.ComponentResourceOptions,
    config?: Config
  ) {
    super('apps:docker-service', name, args, opts);
    const cnf = config || new Config();

    const { build, ...serviceArgs } = args;

    const clientConfig = gcp.organizations.getClientConfig();

    const version = serviceArgs.version;

    const image = pulumi
      .all([cnf.get('gcp:project'), cnf.get('gcp:region'), version])
      .apply(([project, region, tag]) =>
        gcp.container.getRegistryImage(
          {
            name,
            project,
            region,
            tag,
          },
          {
            parent: this,
          }
        )
      );

    this.image = new docker.Image(
      `${name}-docker-image`,
      {
        imageName: image.apply((i) => i.imageUrl),
        build,
        registry: {
          server: 'eu.gcr.io',
          username: '_json_key',
          password: clientConfig.then((conf) => conf.accessToken),
        },
      },
      {
        parent: this,
      }
    );

    this.service = new Service(
      name,
      {
        image: this.image.imageName,
        ...serviceArgs,
      },
      {
        parent: this,
      }
    );
  }
}
