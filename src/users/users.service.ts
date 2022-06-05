import { Injectable } from '@nestjs/common';
import { User, ListUser, NewUser } from '../types/users';
import { BaseService } from '../types/BaseService';
import { ID } from '../types/base';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends BaseService<User, NewUser> {
  constructor(@InjectRepository(UsersEntity) usersRepository: Repository<UsersEntity>) {
    super(usersRepository);
  }

  getAll() {
    return this.usersRepository.find();
  }

  getById(id: ID) {
    return this.usersRepository.findOneBy({ id });
  }

  create(newUser: NewUser) {
    return this.usersRepository.save({ ...newUser });
  }

  update(id: ID, newData: NewUser) {
    return this.usersRepository.update({ id }, newData);
  }

  archive(id: ID) {
    return this.usersRepository.update({ id }, { isDeleted: true });
  }

  delete(id: ID) {
    return this.usersRepository.delete({ id });
  }

  getAutoSuggestUsers(query: string, limit?: number): ListUser {
    return this.getAll()
      .filter(({ login }) => login.toLowerCase().includes(query.toLowerCase()))
      .slice(0, limit);
  }
}
