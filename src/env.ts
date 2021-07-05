import path from 'path';
import * as dotenv from 'dotenv';
import {existsSync} from 'fs';
import {
  getOsEnv, getOsEnvOptional, getOsPaths, toBool, toNumber,
} from 'lib/env';

const pathByMode = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
if (existsSync(pathByMode)) {
  dotenv.config({path: pathByMode});
} else {
  dotenv.config({path: path.resolve(process.cwd(), '.env')});
}

export const env = {
  node: process.env.NODE_ENV || 'development',
  isTest: process.env.NODE_ENV === 'test',
  app: {
    routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
    dirs: {
      controllers: getOsPaths('CONTROLLERS'),
      entities: getOsPaths('TYPEORM_ENTITIES'),
    },
  },
  log: {
    level: getOsEnv('LOG_LEVEL'),
  },
  db: {
    type: getOsEnv('TYPEORM_CONNECTION'),
    host: getOsEnvOptional('TYPEORM_HOST'),
    port: toNumber(getOsEnvOptional('TYPEORM_PORT')),
    username: getOsEnvOptional('TYPEORM_USERNAME'),
    password: getOsEnvOptional('TYPEORM_PASSWORD'),
    database: getOsEnv('TYPEORM_DATABASE'),
    synchronize: toBool(getOsEnvOptional('TYPEORM_SYNCHRONIZE')),
    logging: getOsEnv('TYPEORM_LOGGING'),
  },
};
