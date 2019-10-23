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

export const getUserPlus = (request: Request) => {
  return request.user?.getUserAttributes(request.user.userId);
};
