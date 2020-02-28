export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1'
    : 'TODO: webserver';

export const PORT = process.env.NODE_ENV === 'development' ? ':5000' : '';
