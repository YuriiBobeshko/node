import { Injectable } from '@nestjs/common';
import { User, ListUser, NewUser } from '../types/users';
import { BaseService } from '../types/BaseService';
import { ID } from '../types/base';

@Injectable()
export class UsersService extends BaseService<User, NewUser> {
  private usersList: ListUser = [
    {
      id: '0',
      login: 'Yura',
      password: '12345678',
      age: 23,
      isDeleted: false,
    },
  ];

  getAll() {
    return this.usersList;
  }

  getById(id: ID) {
    return this.usersList.find(({ id: userId }) => String(userId) === String(id));
  }

  create(newUser: NewUser) {
    const newUserData: User = {
      ...newUser,
      id: this.usersList.length,
      isDeleted: false,
    };

    this.usersList.push(newUserData);

    return newUserData;
  }

  update(id: ID, newData: NewUser) {
    const userData = this.getById(id);

    if (!userData) {
      return undefined;
    }

    const updatedUser: User = {
      ...userData,
      ...newData,
      isDeleted: false,
    };

    this.usersList = this.usersList.map((user) => {
      if (user.id === id) {
        return updatedUser;
      }

      return user;
    });

    return updatedUser;
  }

  archive(id: ID) {
    const userData = this.getById(id);

    if (!userData) {
      return undefined;
    }

    this.usersList = this.usersList.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          isDeleted: true,
        };
      }

      return user;
    });

    return this.usersList;
  }

  delete(id: ID) {
    this.usersList = this.usersList.filter(({ id: userId }) => userId !== id);
    return this.usersList;
  }

  getAutoSuggestUsers(query: string, limit?: number): ListUser {
    return this.getAll()
      .filter(({ login }) => login.toLowerCase().includes(query.toLowerCase()))
      .slice(0, limit);
  }
}
