import 'dotenv/config';
import { Users } from '../users/users.model';
import { SequelizeOptions } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types/sequelize';

export const dbConfig: SequelizeOptions = {
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_DB),
  username: process.env.USER_NAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  dialect: process.env.DIALECT_DB as Dialect,
  models: [Users],
  logging: console.log,
};
