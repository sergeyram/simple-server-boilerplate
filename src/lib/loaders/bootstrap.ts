import {BootstrapConfig, BootstrapSettings} from './types';

export function bootstrap(config: BootstrapConfig): void {
  const settings: BootstrapSettings = {
    setData(key, data) {
      this[key] = data;
    },
    getData(key) {
      return this[key];
    },
  };

  const {loaders} = config;
  loaders.forEach((loader) => {
    try {
      loader(settings);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  });
}
