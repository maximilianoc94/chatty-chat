import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/home";

function Routing() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default Routing;
