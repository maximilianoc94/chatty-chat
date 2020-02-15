import socketIOClient from 'socket.io-client';
import { useState } from 'react';

const config = {
  endpoint: 'http://127.0.0.1:5000/',
};
const useSocketIO = () => {
  const [socket] = useState(socketIOClient(config.endpoint));
  return socket;
};

export default useSocketIO();
