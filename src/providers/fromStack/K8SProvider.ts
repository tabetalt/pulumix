import * as k8s from '@pulumi/kubernetes';
import { Config } from '../../helpers';
import { getFromStackProviderArgs } from './getFromStackProviderArgs';

export function K8SProvider(config: Config) {
  const args = getFromStackProviderArgs(config, 'k8s');
  return new k8s.Provider('k8s-from-stack-provider', args);
}
