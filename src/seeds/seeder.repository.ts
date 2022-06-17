import { Inject, Injectable } from '@nestjs/common';
import { Users } from '../users/users.model';
import { NewUser } from '../types/users';

@Injectable()
export class SeederRepository {
  constructor(
    @Inject(Users.name)
    private readonly userModel: typeof Users,
  ) {}

  isUserDataExist(id: number): Promise<boolean> {
    return this.userModel
      .findOne({
        where: { id },
      })
      .then((res) => res !== null);
  }

  createUsers(users: NewUser[]): Promise<NewUser[]> {
    return this.userModel.bulkCreate(users);
  }
}
