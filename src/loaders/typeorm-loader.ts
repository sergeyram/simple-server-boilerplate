import {env} from 'src/env';
import {createConnection, getConnectionOptions} from 'typeorm';
import {BootstrapLoader} from 'lib/loaders';

export const typeormLoader: BootstrapLoader = async (settings) => {
  const loadedConnectionOptions = await getConnectionOptions();

  const connectionOptions = Object.assign(loadedConnectionOptions, {
    type: env.db.type,
    host: env.db.host,
    port: env.db.port,
    username: env.db.username,
    password: env.db.password,
    database: env.db.database,
    synchronize: env.db.synchronize,
    logging: env.db.logging,
    entities: env.app.dirs.entities,
  });

  const connection = await createConnection(connectionOptions);

  if (settings) {
    settings.setData({
      connection,
      onShutdown: () => connection.close(),
    });
  }
};
