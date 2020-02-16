import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './router';
import StoreContext from './store';
import './styles/global.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StoreContext>
    <Routing />
  </StoreContext>,
  document.getElementById('root'),
);

serviceWorker.unregister();
