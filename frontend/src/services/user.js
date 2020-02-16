import socketIO from './socket.js';
import { Subject } from 'rxjs';

class UserService {
  constructor() {
    this.user = new Subject();
    socketIO.on('login response', (data) => {
      this.user.next(data);
    });
  }

  login(user) {
    socketIO.emit('login', user);
  }
}

export default new UserService();
