import {createExpressServer} from 'routing-controllers';
import {BootstrapLoader} from 'lib/loaders';
import {env} from '../env';

export const expressServerLoader: BootstrapLoader = () => {
  const app = createExpressServer({
    controllers: env.app.dirs.controllers,
  });

  app.listen(3000);
};
