import { Injectable } from '@nestjs/common';
import { SeederRepository } from './seeder.repository';
import { usersData } from './data/users';
import { groups } from './data/groups';

@Injectable()
export class SeederService {
  constructor(private readonly seederRepository: SeederRepository) {}

  async startSeedsUsers(): Promise<void> {
    try {
      const checkUsers = await this.seederRepository.isUserDataExist(usersData[0].id);
      if (!checkUsers) {
        await this.seederRepository.createUsers(usersData);
      } else {
        console.log('Users data has mocked mock.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  async startSeedsGroups(): Promise<void> {
    try {
      const checkGroups = await this.seederRepository.isGroupsDataExist(1);
      if (!checkGroups) {
        await this.seederRepository.createGroups(groups);
      } else {
        console.log('Groups data has mocked mock.');
      }
    } catch (err) {
      console.error(err);
    }
  }

  async startSeedsUsersGroups(): Promise<void> {
    try {
      const checkUsersGroups = await this.seederRepository.isUsersGroupsDataExist();

      if (!checkUsersGroups) {
        await this.seederRepository.connectUsersGroups();
      } else {
        console.log('UsersGroups data has mocked mock.');
      }
    } catch (err) {
      console.error(err);
    }
  }
}
