import { yell, yellPlus } from '../../src/sharing/session-3';

describe('Assertion Functions', () => {
  it('asserts condition with not string', () => {
    try {
      yell(1);
      fail();
    } catch (e) {
      expect(e.message).toEqual('error');
    }
  });

  it('asserts condition with string', () => {
    expect(yell('hello')).toEqual('HELLO');
  });

  it('str is null', () => {
    try {
      yellPlus(null);
      fail();
    } catch (e) {
      expect(e.message).toEqual('Expected \'val\' to be defined, but received null');
    }
  });

  it('str is undefined', () => {
    try {
      yellPlus(undefined);
      fail();
    } catch (e) {
      expect(e.message).toEqual('Expected \'val\' to be defined, but received undefined');
    }
  });

  it('asserts condition with string', () => {
    expect(yellPlus('hello')).toEqual('HELLO');
  });
});
