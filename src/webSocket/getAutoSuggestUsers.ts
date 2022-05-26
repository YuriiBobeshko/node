import WebSocket from 'ws';

import { filterUserByLogin } from '../controllers/user';
import { Server } from 'http';

export const getAutoSuggestUsers = (server: Server) => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message) => onMessage(message, ws));
  });
};

const onMessage = (message: string, ws: WebSocket) => {
  try {
    const { text, limit = 5 } = JSON.parse(message);
    const data = filterUserByLogin(text, limit);
    ws.send(JSON.stringify(data));
  } catch (e) {
    ws.send(e.message);
  }
};
