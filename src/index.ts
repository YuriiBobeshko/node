import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Router from './routes/user';

dotenv.config();

const App = express();
const port = 3000;

App.use(cors());
App.use(express.json());

App.use('/api/user', Router);

App.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3001}`);
});
