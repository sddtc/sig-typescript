import { nullishCoalescing } from '../../src/beta/nullish-coalescing';

describe('nullish coalescing', () => {
  it('should return =v= when bar is undefined and isFoo is false', () => {
    expect(nullishCoalescing(undefined, false)).toBe('=v=');
  });

  it('should return TAT when bar is undefined and isFoo is true', () => {
    expect(nullishCoalescing(undefined, true)).toBe('TAT');
  });

  it('should return =v= when bar is null and isFoo is false', () => {
    expect(nullishCoalescing(null, false)).toBe('=v=');
  });

  it('should return TAT when bar is null and isFoo is true', () => {
    expect(nullishCoalescing(null, true)).toBe('TAT');
  });

  it('should return hello when bar is hello and no matter what isFoo is', () => {
    expect(nullishCoalescing('hello', true)).toBe('hello');
  });

  it('should return hello when bar is hello and no matter what isFoo is', () => {
    expect(nullishCoalescing('hello', false)).toBe('hello');
  });
});
