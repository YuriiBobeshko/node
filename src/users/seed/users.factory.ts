import { define } from 'typeorm-seeding';
import { UsersEntity } from '../users.entity';

define(UsersEntity, () => {
  const user = new UsersEntity();
  return user;
});
