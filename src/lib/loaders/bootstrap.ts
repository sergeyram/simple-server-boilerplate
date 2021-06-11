import {Logger} from 'lib/logger';
import {pick, assign} from 'lodash';
import {BootstrapConfig, IBootstrapSettings} from './types';

const log = new Logger(__filename);

export function bootstrapApp(config: BootstrapConfig): IBootstrapSettings {
  const settings: IBootstrapSettings = {
    setData(obj) {
      assign(this, obj);
    },
    getData(...keys) {
      return pick(this, keys);
    },
    onShutdown() {
      return null;
    },
  };

  const {loaders} = config;
  loaders.forEach((loader) => {
    try {
      loader(settings);
    } catch (e) {
      log.error(e.message);
    }
  });

  return settings;
}
