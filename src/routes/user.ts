import express from 'express';
import validatorJoi from 'express-joi-validation';

import { IGetUserAuthInfoRequest } from '../types/user';
import { createUser, deleteUser, getUser, upDateUser } from '../controllers/user';
import { createUserSchema, deleteUserSchema, getUserByIdSchema, upDateUserSchema } from '../schemas/user';

const Router = express.Router();
const validator = validatorJoi.createValidator();

Router.param('id', (req: IGetUserAuthInfoRequest, res, next) => {
  const { user } = getUser(req.params.id);
  req.currentUser = user;

  next();
});

Router.get('/:id', validator.params(getUserByIdSchema), (req: IGetUserAuthInfoRequest, res) => {
  res.json(req.currentUser || {});
});

Router.post('/create', validator.body(createUserSchema), (req, res) => {
  const idNewUser = createUser(req.body);
  res.json(getUser(idNewUser).user);
});

Router.put('/update', validator.body(upDateUserSchema), (req, res) => {
  const id = upDateUser(req.body);
  const { user } = getUser(id);

  res.json(user);
});

Router.delete('/delete/:id', validator.params(deleteUserSchema), (req, res) => {
  console.log('delete', req.body);
  const id = deleteUser(req.params.id);
  const { user } = getUser(id);

  res.json(user);
});

export default Router;
