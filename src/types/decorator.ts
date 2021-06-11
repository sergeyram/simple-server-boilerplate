import {Constructable} from 'typedi';

export type ParameterDecoratorTypes = (
  target: Constructable<unknown>,
  propertyKey: string | symbol,
  parameterIndex: number
) => void;
