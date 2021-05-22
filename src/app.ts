import 'reflect-metadata';
import {createExpressServer} from 'routing-controllers';
import {env} from './env';

const app = createExpressServer({
  controllers: env.app.dirs.controllers,
});

app.listen(3000);
