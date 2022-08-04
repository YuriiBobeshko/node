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
    if (!user) throw new Error('This user already uses');

    return user;
  }

  async create(newUser: NewUser) {
    if (await this.isLoginUniq(newUser.login)) {
      throw new Error('This login already uses');
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
      throw Error(error);
      // await t.rollback();
    }
    return result;
  }

  archive(id: ID) {
    const res = this.usersRepository.update(
      { isDeleted: true },
      {
        where: {
          id,
        },
      },
    );
    if (!res) throw Error('Unsuccessful archiving');
    return res;
  }

  async delete(id: ID) {
    const res = await this.usersRepository.destroy({
      where: {
        id,
      },
    });
    if (!res) throw Error('Nothing to delete');
    return res;
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

  async isLoginUniq(login: string): Promise<boolean> {
    return !this.usersRepository.findOne({
      where: {
        login,
      },
    });
  }
}
