import 'reflect-metadata';
import {Application} from 'express';
import {bootstrapApp} from 'src/lib/loaders';
import {winstonLoader} from 'src/loaders/winston-loader';
import {expressServerLoader} from 'src/loaders/express-server-loader';

export interface BootstrapAppForTestSettings {
  app: Application;
}

export function bootstrapAppForTest(): BootstrapAppForTestSettings {
  const appSettings = bootstrapApp({
    loaders: [
      winstonLoader,
      expressServerLoader,
    ],
  });

  return {
    app: appSettings.getData('express_app'),
  };
}
