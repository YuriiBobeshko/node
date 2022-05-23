import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import UserRouter from './routes/user';
import { getAutoSuggestUsers } from './webSocket/getAutoSuggestUsers';

dotenv.config();
const App = express();
export const server = http.createServer(App);

const port = process.env.PORT || 3001;

App.use(cors());
App.use(express.json());

App.use('/api/user', UserRouter);
getAutoSuggestUsers();
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
