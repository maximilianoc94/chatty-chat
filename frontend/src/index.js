import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import Routing from './router.js';
import StoreContext from './store/index.js';

render(
  <StoreContext>
    <Routing />
  </StoreContext>,
  document.getElementById('root'),
);
