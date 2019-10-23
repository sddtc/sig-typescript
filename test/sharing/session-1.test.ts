import { getUser } from '../../src/sharing/session-1';

describe('Optional Chaining', () => {
  describe('old one', () => {
    it('user id is fake-id', () => {
      const getUserAttributes = jest.fn();
      const user = { userId: 'fake-id', getUserAttributes };

      getUser({ user });

      expect(getUserAttributes).toBeCalledWith('fake-id');
    });

    it('user is null', () => {
      const result = getUser({ user: null });
      expect(result).toBeUndefined();
    });

    it('user is undefined', () => {
      const result = getUser({ user: undefined });
      expect(result).toBeUndefined();
    });
  });
});
