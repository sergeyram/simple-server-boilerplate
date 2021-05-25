import 'reflect-metadata';
import {bootstrapApp} from 'lib/loaders';
import {winstonLoader} from 'loaders/winston-loader';
import {expressServerLoader} from 'loaders/express-server-loader';

bootstrapApp({
  loaders: [
    winstonLoader,
    expressServerLoader,
  ],
});
