import socketIOClient from 'socket.io-client';

const config = {
  endpoint: 'http://127.0.0.1:5000/',
};

const socketio = socketIOClient(config.endpoint);

socketio.on('connect', () => {
  console.log('connected');
});

export default socketio;
