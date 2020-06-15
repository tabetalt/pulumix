import * as pulumi from '@pulumi/pulumi';

/**
 * Custom Resource Options with extendable Config
 *
 * This is used to extend configuration.
 * @example
 * ```typescript
 * class CustomConfig {
 *  get(key: string) {
 *    const getConfig = async (key: string) => {
 *      ...some async code
 *      return something
 *    }
 *    return pulumi.output(getConfig(key));
 *  }
 * }
 *
 * const config = new CustomConfig();
 *
 * const resource = new resource('name', {}, {
 *  config,
 * })
 * ```
 */
export interface CustomResourceOptionsWithConfig
  extends pulumi.CustomResourceOptions {
  config: Config;
}

const pulumiConfig = new pulumi.Config();

/**
 * Config Class
 *
 * @example
 * ```typescript
 * import * as pulumix from '@tabetalt/pulumix';
 *
 * const config = new pulumi.helpers.Config();
 * config.get('defaultDomain');
 * ```
 */
export class Config {
  get<K extends string = string>(key: string) {
    return pulumi.output(
      (() => {
        return pulumiConfig.get<K>(key);
      })()
    );
  }
}
