import { Inject, Injectable } from '@nestjs/common';
import { Users } from '../users/users.model';
import { NewUser } from '../types/users';
import { Groups } from '../groups/groups.model';
import { NewGroupSeed } from '../types/groups';
import { UsersGroups } from '../users-groups/users-groups.model';

@Injectable()
export class SeederRepository {
  constructor(
    @Inject(Users.name)
    private readonly userModel: typeof Users,
    @Inject(Groups.name)
    private readonly groupModel: typeof Groups,
    @Inject(UsersGroups.name)
    private readonly usersGroupModel: typeof UsersGroups,
  ) {}

  isUserDataExist(id: number): Promise<boolean> {
    return this.userModel
      .findOne({
        where: { id },
      })
      .then((res) => res !== null);
  }

  createUsers(users: NewUser[]): Promise<Users[]> {
    return this.userModel.bulkCreate(users);
  }

  isGroupsDataExist(id: number): Promise<boolean> {
    return this.groupModel
      .findOne({
        where: { id },
      })
      .then((res) => res !== null);
  }

  createGroups(groups: NewGroupSeed[]): Promise<Groups[]> {
    // @ts-ignore
    return this.groupModel.bulkCreate(groups);
  }

  async isUsersGroupsDataExist() {
    return await this.usersGroupModel.count();
  }

  connectUsersGroups(): Promise<UsersGroups[]> {
    return this.usersGroupModel.bulkCreate([
      {
        userId: 11,
        groupId: 1,
      },
      {
        userId: 12,
        groupId: 1,
      },
      {
        userId: 13,
        groupId: 1,
      },
      {
        userId: 14,
        groupId: 2,
      },
    ]);
  }
}
