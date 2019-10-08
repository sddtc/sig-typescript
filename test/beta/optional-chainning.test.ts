import { optionalChaning, Foo } from '../../src/beta/optional-chaining';

describe('optional channing', () => {
  it('should return true if param is existed', () => {
      const foo: Foo = { bar: { baz: jest.fn() }};
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
