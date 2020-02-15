import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Routing from "./router.js";
import * as serviceWorker from "./serviceWorker";
import StoreContext from "./store/index.js";

ReactDOM.render(
  <StoreContext>
    <Routing />
  </StoreContext>,
  document.getElementById("root")
);

serviceWorker.unregister();
