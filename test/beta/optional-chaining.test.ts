import { optionalChaning, Foo, tryGetFirstElement } from '../../src/beta/optional-chaining';

describe('optional chaning in object', () => {
  it('should return true if foo is not null or undefined', () => {
    const bazFn = jest.fn();
    const foo: Foo = { bar: { baz: bazFn } };
    optionalChaning(foo);
    expect(bazFn).toBeCalled;
  });

  it('should return undefine when foo is null', () => {
    expect(optionalChaning(null)).toBe(undefined);
  });

  it('should return undefine when foo is undefined', () => {
    expect(optionalChaning(undefined)).toBe(undefined);
  });

  it('should return undefined if foo without bar', () => {
    const foo: Foo = {};
    expect(optionalChaning(foo)).toBe(undefined);
  });
});

describe('optional chaining in array', () => {
  it('should return undefined if array is undefined.', () => {
    expect(tryGetFirstElement(undefined)).toBe(undefined);
  });

  it('should return undefined if array is null.', () => {
    expect(tryGetFirstElement(null)).toBe(undefined);
  });

  it('should return the first ele in array when array is not null or undefined', () => {
    expect(tryGetFirstElement([1,2,3])).toBe(1);
  });
});
