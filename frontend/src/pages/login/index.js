import React from 'react';
import PropTypes from 'prop-types';

import { base } from './login.module.scss';

const propTypes = {};
function Login(props){
  return (
      <div className={base}>
        login component works
      </div>
      );
}

Login.propTypes = propTypes;
export default Login;
