import { getUser, getUserPlus } from '../../src/sharing/session-1';

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

    it('request is null', () => {
      const result = getUser(null);
      expect(result).toBeUndefined();
    });

    it('request is undefined', () => {
      const result = getUser(undefined);
      expect(result).toBeUndefined();
    });
  });

  describe('new one', () => {
    it('user id is fake-id', () => {
      const getUserAttributes = jest.fn();
      const user = { userId: 'fake-id', getUserAttributes };

      getUserPlus({ user });

      expect(getUserAttributes).toBeCalledWith('fake-id');
    });

    it('user is null', () => {
      const result = getUserPlus({ user: null });
      expect(result).toBeUndefined();
    });

    it('user is undefined', () => {
      const result = getUserPlus({ user: undefined });
      expect(result).toBeUndefined();
    });
  });
});
