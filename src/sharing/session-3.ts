import { AssertionError } from 'assert';

function assert(condition: any): asserts condition {
  if (!condition) {
    throw new AssertionError({ message: 'error'})
  }
}

export const yell = (str: any) => {
  assert(typeof str === 'string');

  return str.toUpperCase();
};

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new AssertionError({ message: `Expected 'val' to be defined, but received ${val}`});
  };
};

export const yellPlus = (str: any) => {
  assertIsDefined(str);

  return str.toUpperCase();
};
