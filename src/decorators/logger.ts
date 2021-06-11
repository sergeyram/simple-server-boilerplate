import {Container} from 'typedi';
import {Logger as WinstonLogger} from 'src/lib/logger';
import {ParameterDecoratorTypes} from 'src/types/decorator';

export function LoggerDecorator(scope: string): ParameterDecoratorTypes {
  return (object, propertyKey, index): void => {
    const logger = new WinstonLogger(scope);
    const propertyName = propertyKey ? propertyKey.toString() : '';
    Container.registerHandler({
      object,
      propertyName,
      index,
      value: () => logger,
    });
  };
}

export {LoggerInterface} from 'src/lib/logger';
