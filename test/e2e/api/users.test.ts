import request from 'supertest';
import {bootstrapAppForTest, BootstrapAppForTestSettings} from '../utils/bootstrap';

describe('/users', () => {
  let settings: BootstrapAppForTestSettings;
  beforeAll(() => {
    settings = bootstrapAppForTest();
  });

  test('[GET] /users should return a text', async (done) => {
    const resp = await request(settings.app)
      .get('/users')
      .expect(200);

    expect(resp.text).toBe('This action returns all users');
    done();
  });
});
