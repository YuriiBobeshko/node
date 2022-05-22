import Joi from 'Joi';

export const getUserByIdSchema = Joi.object({
  id: Joi.string().required(),
});

export const createUserSchema = Joi.object({
  login: Joi.string().required(),
  password: Joi.string().required(),
  age: Joi.number().required(),
  isDeleted: Joi.boolean().required(),
});

export const upDateUserSchema = Joi.object({
  id: Joi.string().required(),
  login: Joi.string(),
  password: Joi.string(),
  age: Joi.number(),
  isDeleted: Joi.boolean(),
});

export const deleteUserSchema = Joi.object({
  id: Joi.string().required(),
});
