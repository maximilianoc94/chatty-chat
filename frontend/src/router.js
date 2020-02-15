import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/home';
import Login from './pages/login';
import AuthGuard from './components/auth-guard';

function Routing() {
  return (
    <Router>
      <AuthGuard path="/">
        <Home path="/" />
      </AuthGuard>
      <Login path="/login" />
    </Router>
  );
}

export default Routing;
