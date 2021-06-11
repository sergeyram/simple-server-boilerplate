import {Container} from 'typedi';
import {BootstrapLoader} from 'lib/loaders';
import {useContainer as ormUseContainer} from 'typeorm';
import {useContainer as routingUseContainer} from 'routing-controllers';
import {useContainer as classValidatorUseContainer} from 'class-validator';

/**
 * Setup routing-controllers to use typedi container.
 */
export const iocLoader: BootstrapLoader = () => {
  routingUseContainer(Container);
  ormUseContainer(Container);
  classValidatorUseContainer(Container);
};
