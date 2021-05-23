import {configure, format, transports} from 'winston';
import {BootstrapLoader} from 'lib/loaders';
import {env} from '../env';

export const winstonLoader: BootstrapLoader = () => {
  configure({
    transports: [
      new transports.Console({
        level: env.log.level,
        handleExceptions: true,
        format: env.node !== 'development'
          ? format.combine(
            format.json(),
          )
          : format.combine(
            format.colorize(),
            format.simple(),
          ),
      }),
    ],
  });
};
