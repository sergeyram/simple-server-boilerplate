import 'reflect-metadata';
import {bootstrapApp} from 'lib/loaders';
import {iocLoader} from 'loaders/ioc-loader';
import {winstonLoader} from 'loaders/winston-loader';
import {typeormLoader} from 'loaders/typeorm-loader';
import {expressServerLoader} from 'loaders/express-server-loader';

bootstrapApp({
  loaders: [
    winstonLoader,
    iocLoader,
    typeormLoader,
    expressServerLoader,
  ],
});
