import {join} from 'path';

function getPath(path: string): string {
  return (process.env.NODE_ENV === 'production')
    ? join(process.cwd(), `${path.replace('src/', 'dist/').slice(0, -3)}.js`)
    : join(process.cwd(), path);
}

function getPaths(paths: string[]): string[] {
  return paths.map((p) => getPath(p));
}

function getOsEnvArray(key: string, delimiter = ','): string[] {
  return (process.env[key]?.split(delimiter) || []);
}

export function getOsPaths(key: string): string[] {
  return getPaths(getOsEnvArray(key));
}

export function getOsEnv(key: string): string {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return process.env[key] as string;
}

export function getOsEnvOptional(key: string): string | undefined {
  return process.env[key];
}

export function toNumber(value: string): number {
  return parseInt(value, 10);
}

export function toBool(value: string): boolean {
  return value === 'true';
}
