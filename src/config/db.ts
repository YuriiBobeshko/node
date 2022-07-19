import 'dotenv/config';
import { Users } from '../users/users.model';
import { Dialect, Options } from 'sequelize/types/sequelize';
import { Groups } from '../groups/groups.model';
import { UsersGroups } from '../users-groups/users-groups.model';
import { Logger } from '@nestjs/common';

export const dbConfig: Options = {
  host: process.env.HOST_DB,
  port: Number(process.env.PORT_DB),
  username: process.env.USER_NAME_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB,
  dialect: process.env.DIALECT_DB as Dialect,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  models: [Users, Groups, UsersGroups],
  synchronize: true,
  autoLoadModels: true,
  logging: (text) => {
    Logger.log(text, 'database');
  },
};
