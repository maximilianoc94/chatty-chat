import React from "react";
import { Redirect } from "@reach/router";
import { Store } from "../../store/index.js";

function AuthGuard({ children }) {
  const store = React.useContext(Store);

  if (store.user) {
    return <Redirect to="/login" noThrow />;
  }
  return children;
}

export default AuthGuard;
