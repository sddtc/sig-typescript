import { Optional } from '../types/typeHelpers';

export interface Foo {
  bar: Bar;
}

export interface Bar {
  baz: () => void;
}

export const optionalChaning = (foo: Optional<Foo>) => foo?.bar.baz();

export const tryGetFirstElement= <T>(arr: Optional<T[]>) => arr?.[0];
