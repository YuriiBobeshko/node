import WebSocket from 'ws';

import { server } from '../index';
import { filterUserByLogin } from '../controllers/user';

export const getAutoSuggestUsers = () => {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {
      const data = filterUserByLogin(message);
      ws.send(JSON.stringify(data));
    });
  });
};
