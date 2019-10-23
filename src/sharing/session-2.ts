import { Optional } from '../types/typeHelpers';

export type Face = 'TAT' | '=v=';

const barFn = (bar: Optional<string>) => bar;
const fooFn = (isFoo: boolean): Face => isFoo ? '=v=' : 'TAT';

export const face = (bar: Optional<string>, isFoo: boolean) => {
  if (barFn(bar) !== null && barFn(bar) !== undefined) {
    return barFn(bar);
  }
  return fooFn(isFoo);
};
