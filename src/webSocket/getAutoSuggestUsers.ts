import WebSocket from 'ws';

import { server } from '../index';
import { filterUserByLogin } from '../controllers/user';

export const getAutoSuggestUsers = () => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {
      const { text, limit = 5 } = JSON.parse(message);
      const data = filterUserByLogin(text, limit);
      ws.send(JSON.stringify(data));
    });
  });
};
