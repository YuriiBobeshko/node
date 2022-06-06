import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { UsersEntity } from '../users.entity';

export class UsersCreateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await getManager().query('TRUNCATE users');
    await factory(UsersEntity)().create({
      login: 'Amitav Roy',
      password: 'reachme@amitavroy.com',
      age: 23,
    });
  }
}
