import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home/index.js';
import Login from './pages/login/index.js';

function Routing() {
  return (
    <Router>
      <Login path="/login" />
      <Home path="/" />
    </Router>
  );
}

export default Routing;
