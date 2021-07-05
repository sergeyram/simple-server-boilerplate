import {env} from 'src/env';
import {BootstrapLoader} from 'lib/loaders';
import {createExpressServer} from 'routing-controllers';

export const expressServerLoader: BootstrapLoader = (settings) => {
  const app = createExpressServer({
    controllers: env.app.dirs.controllers,
    routePrefix: env.app.routePrefix,
  });

  if (!env.isTest) {
    const server = app.listen(3000);
    settings.setData({
      expressServer: server,
    });
  }

  settings.setData({
    expressApp: app,
  });
};
