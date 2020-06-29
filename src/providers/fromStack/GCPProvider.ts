import * as gcp from '@pulumi/gcp';
import { Config } from '../../helpers';
import { getFromStackProviderArgs } from './getFromStackProviderArgs';

/** */
export function GCPProvider(config: Config) {
  const args = getFromStackProviderArgs(config, 'gcp');
  return new gcp.Provider('gcp-from-stack-provider', args);
}
