import 'reflect-metadata';
import {bootstrap} from 'lib/loaders';
import {winstonLoader} from 'loaders/winston-loader';
import {expressServerLoader} from 'loaders/express-server-loader';

bootstrap({
  loaders: [
    winstonLoader,
    expressServerLoader,
  ],
});
