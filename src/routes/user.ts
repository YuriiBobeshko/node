import validatorJoi from 'express-joi-validation';
import express from 'express';

import { IGetUserAuthInfoRequest } from '../types/user';
import { createUser, deleteUser, getUser, upDateUser } from '../controllers/user';
import { createUserSchema, deleteUserSchema, getUserByIdSchema, upDateUserSchema } from '../schemas/user';

const router = express.Router();
const validator = validatorJoi.createValidator();

router.param('id', (req: IGetUserAuthInfoRequest, res, next) => {
  const { user } = getUser(req.params.id);
  req.currentUser = user;

  next();
});

router.get('/:id', validator.params(getUserByIdSchema), (req: IGetUserAuthInfoRequest, res) => {
  res.json(req.currentUser || {});
});

router.post('/create', validator.body(createUserSchema), (req, res) => {
  const idNewUser = createUser(req.body);
  res.json(getUser(idNewUser).user);
});

router.put('/update', validator.body(upDateUserSchema), (req, res) => {
  const id = upDateUser(req.body);
  const { user } = getUser(id);

  res.json(user);
});

router.delete('/delete/:id', validator.params(deleteUserSchema), (req, res) => {
  const id = deleteUser(req.params.id);
  const { user } = getUser(id);

  res.json(user);
});

export default router;
