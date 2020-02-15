import userReducer from './user.js';

export const initialState = { user: {} };

export default function rootReducer(state = initialState, action) {
  const { user } = state;

  return {
    user: userReducer(user, action),
  };
}
