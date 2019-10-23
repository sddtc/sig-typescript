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
