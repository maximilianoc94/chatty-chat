import * as types from './types';

export function login(user) {
  return { type: types.USER_LOGIN, payload: user };
}
