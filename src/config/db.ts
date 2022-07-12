import 'dotenv/config';
import { Users } from '../users/users.model';
import { Dialect } from 'sequelize/types/sequelize';
import { Groups } from '../groups/groups.model';
import { UsersGroups } from '../users-groups/users-groups.model';

export const dbConfig: any = {
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_DB),
  username: process.env.USER_NAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  dialect: process.env.DIALECT_DB as Dialect,
  models: [Users, Groups, UsersGroups],
  synchronize: true,
  autoLoadModels: true,
  logging: console.log,
};
