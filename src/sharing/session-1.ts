import { Optional } from '../types/typeHelpers';

interface Request {
  user: Optional<User>;
}

interface User {
  userId: string;
  getUserAttributes: (userId: string) => UserAttributes;
}

interface UserAttributes {
  userId: string;
  accessToken: string;
  idToken: string;
}

export const getUser = (request: Optional<Request>) => {
  if (request === null || request === undefined) {
    return undefined;
  }
  if (request.user === null || request.user === undefined) {
    return undefined;
  }
  return request.user.getUserAttributes(request.user.userId);
};

export const getUserPlus = (request: Optional<Request>) => {
  return request?.user?.getUserAttributes(request.user.userId);
};

const fetch = (url: string) => ({ result: `fetch ${url} successfully.` });

export const makeRequest = (url: string, log?: (msg: string) => void) => {
  if (log !== null && log !== undefined) {
    log('Oops');
  }
  const result = fetch(url);
  if (log !== null && log !== undefined) {
    log('done.');
  }
  return result;
};
