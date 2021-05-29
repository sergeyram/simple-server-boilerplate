import {join, resolve} from 'path';
import {getOsEnv, getOsPaths} from 'src/lib/env';
import * as dotenv from 'dotenv';

describe('Unit tests for environment utils', () => {
  let originNodeEnv;
  beforeAll(() => {
    originNodeEnv = process.env.NODE_ENV;
    dotenv.config({path: resolve(__dirname, '.env')});
  });

  describe('getOsEnv', () => {
    test('will trigger a throw', () => {
      expect(() => getOsEnv('INVALID_KEY'))
        .toThrow('Environment variable INVALID_KEY is not set.');
    });

    test('will returned a string', () => {
      expect(typeof getOsEnv('PATH_TO_TEST_FILE'))
        .toBe('string');
    });
  });

  describe('getOsPaths', () => {
    test('will returned a empty array', () => {
      expect(getOsPaths('INVALID_KEY'))
        .toEqual([]);
    });

    test('will returned an array with the path to this file', () => {
      expect(getOsPaths('PATH_TO_TEST_FILE')).toEqual([__filename]);
    });

    test('will returned an array with the path to the app file after build', () => {
      process.env.NODE_ENV = 'production';
      expect(getOsPaths('PATH_TO_APP_FILE')).toEqual([join(process.cwd(), 'dist/app.js')]);
    });
  });

  afterAll(() => {
    process.env.NODE_ENV = originNodeEnv;
  });
});
