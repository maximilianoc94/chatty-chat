import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/home";
import Login from "./pages/login";

function Routing() {
  return (
    <Router>
      <Login path="/login" />
      <Home path="/" />
    </Router>
  );
}

export default Routing;
