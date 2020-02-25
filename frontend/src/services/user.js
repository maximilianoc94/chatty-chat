import socketIO from './socket.js';
import Axios from 'axios';
// import { Subject } from 'rxjs';

Axios.defaults.headers.common = {
  ...Axios.defaults.headers.common,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const endpoints = {
  loginWithAccessToken: () => `http://127.0.0.1:5000/authenticate`,
};

class UserService {
  loginWithAccessToken(token) {
    return Axios.post(endpoints.loginWithAccessToken(), { token }).then(
      (resp) => {
        socketIO.init();
        return resp;
      },
    );
  }
}

export default new UserService();
