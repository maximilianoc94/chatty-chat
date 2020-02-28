import React from 'react';
import ReactDOM from 'react-dom';

import * as firebase from 'firebase/app';
import { firebaseConfig } from './keys.secret';
import * as serviceWorker from './serviceWorker';

import Routing from './router';
import StoreContext from './store';
import './styles/global.scss';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <StoreContext>
    <Routing />
  </StoreContext>,
  document.getElementById('root'),
);

serviceWorker.unregister();
