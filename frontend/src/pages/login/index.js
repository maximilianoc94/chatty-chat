import React from 'react';

import { base } from './login.module.scss';
import UserService from '../../services/user';
import { Store, types } from '../../store';

const propTypes = {};
function Login() {
  const [store, dispatch] = React.useContext(Store);

  UserService.user.subscribe((data) => {
    dispatch({ type: types.USER_LOGIN, payload: data });
  });

  React.useEffect(() => {
    console.log(store.user);
  }, [store.user]);

  const { user } = store;
  return (
    <div className={base}>
      <button
        type="button"
        onClick={() => {
          UserService.login('user');
        }}
      >
        Login
      </button>
      {user}
    </div>
  );
}

Login.propTypes = propTypes;
export default Login;
