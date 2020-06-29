import { Config } from '../../helpers/Config';

export function getFromStackProviderArgs(config: Config, provider: string) {
  return config.getProviderArgs(provider);
}
