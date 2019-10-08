import { Optional } from '../types/typeHelpers';

interface Foo {
  bar: Bar;
}

interface Bar {
  baz: () => void;
}

const fooObj = {
  bar: { baz: () => 'print it.' }
}

const optionalChaning = (foo: Optional<Foo>) => {
  return foo?.bar.baz();
}

console.log(optionalChaning(fooObj));
