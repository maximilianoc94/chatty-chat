import socketIO from './socket.js';

export default class UserService {
  login(user) {
    socketIO.on('login', (data) => {
      console.log(data);
    });
  }
}
