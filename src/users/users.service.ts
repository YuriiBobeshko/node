import { Catch, HttpException, HttpStatus, Injectable, UseFilters } from '@nestjs/common';
import { NewUser } from '../types/users';
import { ID } from '../types/base';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './users.model';
import { Op } from 'sequelize';
import { UsersGroups } from 'src/users-groups/users-groups.model';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectModel(UsersGroups)
    private readonly usersGroupsRepository: Repository<UsersGroups>,
  ) {}

  getAll() {
    return this.usersRepository.findAll();
  }

  async getById(id: ID) {
    const user = await this.usersRepository.findByPk(id);
    if (!user) throw new HttpException('This login already uses', HttpStatus.BAD_REQUEST);

    return user;
  }

  async create(newUser: NewUser) {
    if (await Users.isLoginUniq(this.usersRepository, newUser.login)) {
      throw new HttpException('This login already uses', HttpStatus.BAD_REQUEST);
    }

    return this.usersRepository.create(newUser);
  }

  update(id: ID, newData: NewUser) {
    return this.usersRepository.update(newData, {
      where: {
        id,
      },
    });
  }

  async addUsersToGroup(groupId: ID, userIds: ID[]) {
    // const t = await this.sequelizeInstance.transaction();
    let result;
    try {
      result = await this.usersGroupsRepository.bulkCreate(
        userIds.map((userId) => ({
          userId,
          groupId,
        })),
        // { transaction: t },
      );
      // await t.commit();
    } catch (error) {
      // await t.rollback();
    }
    return result;
  }

  archive(id: ID) {
    return this.usersRepository.update(
      { isDeleted: true },
      {
        where: {
          id,
        },
      },
    );
  }

  delete(id: ID) {
    return this.usersRepository.destroy({
      where: {
        id,
      },
    });
  }

  async getAutoSuggestUsers(query: string, limit = 10) {
    return (
      await this.usersRepository.findAll({
        where: {
          login: { [Op.like]: `%${query}%` },
        },
      })
    ).slice(0, limit);
  }
}
