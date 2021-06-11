import {Server} from 'http';
import {Connection} from 'typeorm';
import {Application} from 'express';

interface IBootstrapSettingParams {
  onShutdown?: () => void,
  connection?: Connection,
  expressServer?: Server,
  expressApp?: Application,
}

type BootstrapSettingParamKeys = keyof IBootstrapSettingParams;

interface IBootstrapSettingMethods {
  setData: (data: IBootstrapSettingParams) => void,
  getData: (...keys: BootstrapSettingParamKeys[]) =>
    Pick<IBootstrapSettingParams, BootstrapSettingParamKeys>,
}

export interface IBootstrapSettings
  extends IBootstrapSettingMethods, IBootstrapSettingParams {}

export type BootstrapLoader = (settings: IBootstrapSettings) => void;

export interface BootstrapConfig {
  loaders: Array<BootstrapLoader>
}
