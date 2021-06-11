import {Logger} from 'lib/logger';
import {BootstrapConfig, BootstrapSettings} from './types';

const log = new Logger(__filename);

export function bootstrapApp(config: BootstrapConfig): BootstrapSettings {
  const settings: BootstrapSettings = {
    setData(key, data) {
      this[key] = data;
    },
    getData(key) {
      return this[key];
    },
    onShutdown() {
      return null;
    },
    setShutdown(handler) {
      if (typeof handler === 'function') {
        this.onShutdown = handler;
      }
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
