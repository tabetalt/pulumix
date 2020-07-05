import * as pulumi from '@pulumi/pulumi';
import { Config } from './Config';

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
  config?: Config;
}

export interface ComponentResourceOptionsWithConfig
  extends pulumi.ComponentResourceOptions {
  config?: Config;
}

export const ResourceOptions = {};
