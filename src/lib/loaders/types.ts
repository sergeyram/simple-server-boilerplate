export interface BootstrapSettings {
  setData: <T = unknown>(key: string, data: T) => void,
  getData: <T = unknown>(key: string) => T
}

export type BootstrapLoader = (settings: BootstrapSettings) => void;

export interface BootstrapConfig {
  loaders: Array<BootstrapLoader>
}
