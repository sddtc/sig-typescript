import { optionalChaning, Foo, tryGetFirstElement } from '../../src/beta/optional-chaining';

describe('optional chaning in object', () => {
  it('should return true if param is existed', () => {
    const foo: Foo = { bar: { baz: jest.fn() } };
    optionalChaning(foo);
    expect(foo.bar.baz).toBeCalled;
  });

  it('should return undefine when foo is null', () => {
    expect(optionalChaning(null)).toBe(undefined);
  });

  it('should return undefine when foo is undefined', () => {
    expect(optionalChaning(undefined)).toBe(undefined);
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
