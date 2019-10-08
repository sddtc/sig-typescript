import { Optional } from '../types/typeHelpers';

export type Face = 'TAT' | '=v=';

const fooFn = (isFoo: boolean): Face => isFoo ? 'TAT' : '=v=';
const barFn = (bar: Optional<string>) => bar;

export const nullishCoalescing = (bar: Optional<string>, isFoo: boolean) => barFn(bar) ?? fooFn(isFoo)
