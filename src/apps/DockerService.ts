import * as docker from '@pulumi/docker';
import * as gcp from '@pulumi/gcp';
import * as pulumi from '@pulumi/pulumi';
import { Service, ServiceSpec } from './Service';
import { ComponentResourceOptionsWithConfig } from '../helpers/ResourceOptions';
import { Config } from '@pulumi/pulumi';

export interface DockerServiceSpec extends Omit<ServiceSpec, 'image'> {
  /**
   * Reference to Dockerfile
   */
  build: pulumi.Input<string | docker.DockerBuild>;
  /**
   * Google Container Registry Region
   * defaults to `eu`
   */
  gcrRegion?: string;
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

  constructor(
    name: string,
    args: DockerServiceSpec,
    opts?: pulumi.ComponentResourceOptions,
  ) {
    super('apps:docker-service', name, opts);

    config = config || new Config();
    const { build, gcrRegion = 'eu', ...serviceArgs } = args;

    const clientConfig = gcp.organizations.getClientConfig();

    const image = pulumi.output(
      clientConfig.then(c => gcp.container.getRegistryImage(
        {
          name,
          project: c.project,
          region: gcrRegion,
        },
        {
          // ...opts,
          parent: this,
          async: true,
        }
      )
    ));

    const version = serviceArgs.version;

    this.image = new docker.Image(
      `${name}-docker-image`,
      {
        imageName: image.imageUrl.apply((image) => `${image}:${version}`),
        build,
        registry: {
          server: 'eu.gcr.io',
          username: '_json_key',
          password: clientConfig.then((conf) => conf.accessToken),
        },
      },
      {
        ...opts,
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
        ...opts,
        parent: this,
      }
    );
  }
}
