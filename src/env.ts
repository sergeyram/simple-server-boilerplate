import path from 'path';
import * as dotenv from 'dotenv';
import {existsSync} from 'fs';
import {getOsPaths} from 'lib/env/utils';

const pathByMode = path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`);
if (existsSync(pathByMode)) {
  dotenv.config({path: pathByMode});
} else {
  dotenv.config({path: path.resolve(process.cwd(), '.env')});
}

export const env = {
  app: {
    dirs: {
      controllers: getOsPaths('CONTROLLERS'),
    },
  },
};
