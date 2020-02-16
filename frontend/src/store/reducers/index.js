import userReducer from './user';

export const initialState = { user: {} };

export default function rootReducer(state = initialState, action) {
  const { user } = state;

  return {
    user: userReducer(user, action),
  };
}
