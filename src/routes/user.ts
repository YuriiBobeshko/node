import express from 'express';
import { IGetUserAuthInfoRequest } from '../types/user';
import { createUser, deleteUser, getUser, upDateUser } from '../controllers/user';

const Router = express.Router();

Router.param('id', (req: IGetUserAuthInfoRequest, res, next) => {
  const { user } = getUser(req.params.id);
  if (user) req.currentUser = user;
  next();
});

Router.get('/:id', (req: IGetUserAuthInfoRequest, res) => {
  res.json(req.currentUser || {});
});

Router.post('/create', (req, res) => {
  const idNewUser = createUser(req.body);
  res.json(getUser(idNewUser).user);
});

Router.put('/update', (req, res) => {
  const id = upDateUser(req.body);
  const { user } = getUser(id);

  res.json(user);
});

Router.delete('/delete/:id', (req, res) => {
  console.log('delete', req.body);
  const id = deleteUser(req.params.id);
  const { user } = getUser(id);

  res.json(user);
});

export default Router;
