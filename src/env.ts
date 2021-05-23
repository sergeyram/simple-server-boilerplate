import path from 'path';
import * as dotenv from 'dotenv';
import {existsSync} from 'fs';
import {getOsEnv, getOsPaths} from 'lib/env';

const pathByMode = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
if (existsSync(pathByMode)) {
  dotenv.config({path: pathByMode});
} else {
  dotenv.config({path: path.resolve(process.cwd(), '.env')});
}

export const env = {
  node: process.env.NODE_ENV || 'development',
  app: {
    dirs: {
      controllers: getOsPaths('CONTROLLERS'),
    },
  },
  log: {
    level: getOsEnv('LOG_LEVEL'),
  },
};
