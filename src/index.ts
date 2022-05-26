import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import UserRouter from './routes/user';
import { getAutoSuggestUsers } from './webSocket/getAutoSuggestUsers';

dotenv.config();
const app = express();
export const server = http.createServer(app);

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/user', UserRouter);
getAutoSuggestUsers(server);
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
