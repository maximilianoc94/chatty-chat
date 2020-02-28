import Axios from 'axios';
import socketIO from './socket';
import { BASE_URL, PORT } from './config';
// import { Subject } from 'rxjs';

const url = `${BASE_URL}${PORT}/user`;

const endpoints = {
  loginWithAccessToken: () => `${url}/authenticate/`,
};

class UserService {
  loginWithAccessToken(token) {
    return Axios.post(endpoints.loginWithAccessToken(), { token }).then(
      (resp) => {
        socketIO.init(token);
        return resp;
      },
    );
  }
}

export default new UserService();
