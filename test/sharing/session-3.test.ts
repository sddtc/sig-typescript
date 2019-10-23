import { yell } from '../../src/sharing/session-3';

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
});
