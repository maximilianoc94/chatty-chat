import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routing from './router';
import * as serviceWorker from './serviceWorker';
import StoreContext from './store';

ReactDOM.render(
  <StoreContext>
    <Routing />
  </StoreContext>,
  document.getElementById('root'),
);

serviceWorker.unregister();
