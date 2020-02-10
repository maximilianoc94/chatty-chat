import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Routing from "./router.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Routing />, document.getElementById("root"));

serviceWorker.unregister();
