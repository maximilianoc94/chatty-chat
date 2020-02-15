// import React from 'react';
// import { Redirect } from '@reach/router';
// import { Store } from '../../../store';

function AuthGuard({ children }) {
  // const store = React.useContext(Store);

  // TODO: uncomment when login is implemented
  // if (!store.user) {
  //   return <Redirect to="/login" noThrow />;
  // }
  return children;
}

export default AuthGuard;
