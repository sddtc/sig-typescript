import { face } from '../../src/sharing/session-2';

describe('Nullish Coalescing', () => {
  it('should return =v= when bar is undefined and isFoo is true', () => {
    expect(face(undefined, true)).toBe('=v=');
  });

  it('should return TAT when bar is undefined and isFoo is false', () => {
    expect(face(undefined, false)).toBe('TAT');
  });

  it('should return =v= when bar is null and isFoo is true', () => {
    expect(face(null, true)).toBe('=v=');
  });

  it('should return TAT when bar is null and isFoo is false', () => {
    expect(face(null, false)).toBe('TAT');
  });

  it('should return hello when bar is hello and no matter what isFoo is', () => {
    expect(face('hello', true)).toBe('hello');
  });
});
