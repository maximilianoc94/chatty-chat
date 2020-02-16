import * as types from '../types';

export default function userReducer(state = false, action) {
  switch (action.type) {
    case types.USER_LOGIN:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
