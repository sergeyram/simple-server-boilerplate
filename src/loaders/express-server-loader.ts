import {Application} from 'express';
import {createExpressServer} from 'routing-controllers';
import {BootstrapLoader} from 'lib/loaders';
import {env} from 'src/env';

export const expressServerLoader: BootstrapLoader = (settings) => {
  const app = createExpressServer({
    controllers: env.app.dirs.controllers,
  });

  if (!env.isTest) {
    const server = app.listen(3000);
    settings.setData('express_server', server);
  }

  settings.setData<Application>('express_app', app);
};
