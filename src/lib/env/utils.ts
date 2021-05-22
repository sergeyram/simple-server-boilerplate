import {join} from 'path';

export function getPath(path: string): string {
  return (process.env.NODE_ENV === 'production')
    ? join(process.cwd(), `${path.replace('src/', 'dist/').slice(0, -3)}.js`)
    : join(process.cwd(), path);
}

export function getPaths(paths: string[]): string[] {
  return paths.map((p) => getPath(p));
}

export function getOsEnvArray(key: string, delimiter = ','): string[] {
  return process.env[key] && (process.env[key].split(delimiter) || []);
}

export function getOsPaths(key: string): string[] {
  return getPaths(getOsEnvArray(key));
}
