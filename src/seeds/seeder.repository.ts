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

  async isUserDataExist(): Promise<boolean> {
    return !!(await this.userModel.count());
  }

  createUsers(users: NewUser[]): Promise<Users[]> {
    return this.userModel.bulkCreate(users);
  }

  async isGroupsDataExist(): Promise<boolean> {
    return !!(await this.groupModel.count());
  }

  createGroups(groups: NewGroupSeed[]): Promise<Groups[]> {
    // @ts-ignore
    return this.groupModel.bulkCreate(groups);
  }

  async isUsersGroupsDataExist(): Promise<boolean> {
    return !!(await this.usersGroupModel.count());
  }

  connectUsersGroups(usersGroupData): Promise<UsersGroups[]> {
    return this.usersGroupModel.bulkCreate(usersGroupData);
  }
}
