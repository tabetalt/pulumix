import * as pulumi from '@pulumi/pulumi';
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
  getProviderArgs<P>(key: string) {
    return pulumi.output<P>(
      (() => {
        return (pulumiConfig.get(`provider-${key}`) as unknown) as P;
      })()
    );
  }
}
