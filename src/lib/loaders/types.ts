export interface BootstrapSettings {
  setData: <T = unknown>(key: string, data: T) => void,
  getData: <T = unknown>(key: string) => T
  onShutdown: () => void,
  setShutdown: (handler: () => void) => void,
}

export type BootstrapLoader = (settings: BootstrapSettings) => void;

export interface BootstrapConfig {
  loaders: Array<BootstrapLoader>
}
