import * as types from '../types.js';

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
