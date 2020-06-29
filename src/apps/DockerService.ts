import * as docker from '@pulumi/docker';
import * as gcp from '@pulumi/gcp';
import * as pulumi from '@pulumi/pulumi';
import { Service, ServiceSpec } from './Service';
import { CustomResourceOptionsWithConfig } from '../helpers/ResourceOptions';

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
  private readonly opts?: CustomResourceOptionsWithConfig;

  readonly service: Service;
  readonly image: docker.Image;

  constructor(
    name: string,
    args: DockerServiceSpec,
    opts?: CustomResourceOptionsWithConfig
  ) {
    super('apps:docker-service', name, opts);

    const { build, gcrRegion = 'eu', ...serviceArgs } = args;

    const image = pulumi.output(
      gcp.container.getRegistryImage(
        {
          name,
          region: gcrRegion,
        },
        {
          parent: this,
          async: true,
          ...opts,
        }
      )
    );

    const clientConfig = gcp.organizations.getClientConfig({
      provider: opts?.provider,
    });

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
        ...opts,
      }
    );
  }
}
