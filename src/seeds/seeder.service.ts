import { Injectable } from '@nestjs/common';
import { SeederRepository } from './seeder.repository';
import { usersData } from './data/users';

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
}
