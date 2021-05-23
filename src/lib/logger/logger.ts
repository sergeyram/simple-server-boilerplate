import * as path from 'path';
import * as winston from 'winston';

const DEFAULT_SCOPE = 'app';

function parsePathToScope(filepath: string): string {
  let scope = filepath;
  if (scope.indexOf(path.sep) >= 0) {
    scope = scope.replace(process.cwd(), '');
    scope = scope.replace(`${path.sep}src${path.sep}`, '');
    scope = scope.replace(`${path.sep}dist${path.sep}`, '');
    scope = scope.replace('.ts', '');
    scope = scope.replace('.js', '');
    scope = scope.replace(path.sep, ':');
  }
  return scope;
}

export class Logger {
  private readonly scope: string;

  constructor(scope?: string) {
    this.scope = `[${parsePathToScope(scope || DEFAULT_SCOPE)}]`;
  }

  private log(level: string, message: string, args: any[]): void {
    if (winston) {
      winston[level](`${this.scope} ${message}`, args);
    }
  }

  public debug(message: string, ...args: any[]): void {
    this.log('debug', message, args);
  }

  public info(message: string, ...args: any[]): void {
    this.log('info', message, args);
  }

  public warn(message: string, ...args: any[]): void {
    this.log('warn', message, args);
  }

  public error(message: string, ...args: any[]): void {
    this.log('error', message, args);
  }
}
