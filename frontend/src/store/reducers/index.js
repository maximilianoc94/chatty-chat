import userReducer from './user';

export const initialState = {};

export default function rootReducer(state = initialState, action) {
  const { user } = state;

  return {
    user: userReducer(user, action),
  };
}
