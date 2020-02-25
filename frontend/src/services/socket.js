import socketIOClient from 'socket.io-client';

const config = {
  endpoint: 'http://127.0.0.1:5000/',
};

const SocketIo = (() => {
  let instance;
  function createInstance() {
    const socket = socketIOClient(config.endpoint);
    return socket;
  }

  return {
    init() {
      if (!instance) {
        instance = createInstance();
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
