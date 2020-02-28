import socketIOClient from 'socket.io-client';

const SocketIo = (() => {
  let instance;
  function createInstance(token) {
    const socket = socketIOClient({
      endpoint: 'http://127.0.0.1:5000/',
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return socket;
  }

  return {
    init(token) {
      if (!instance) {
        instance = createInstance(token);
      } else {
        throw new Error('Duplicate instance for SocketIO');
      }
    },
    getInstance() {
      if (!instance) {
        throw new Error('SocketIO has not been initiated');
      }
      return instance;
    },
  };
})();

export default SocketIo;
