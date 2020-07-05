import * as pulumi from '@pulumi/pulumi';
const pulumiConfig = new pulumi.Config();

import * as k8s from '@pulumi/kubernetes';
import * as gcp from '@pulumi/gcp';

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
  
  getK8SProvider(): k8s.Provider {
    // Not implemented
    return new k8s.Provider('k8s-provider', {});
  }

  getGCPProvider(): gcp.Provider {
    // Not implemented
    return new gcp.Provider('gcp-provider', {});
  }
}
