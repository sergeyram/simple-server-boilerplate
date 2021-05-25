import {Application} from 'express';
import {createExpressServer} from 'routing-controllers';
import {BootstrapLoader} from 'lib/loaders';
import {env} from 'src/env';

export const expressServerLoader: BootstrapLoader = (settings) => {
  const app = createExpressServer({
    controllers: env.app.dirs.controllers,
  });

  app.listen(3000);
  settings.setData<Application>('express_app', app);
};
