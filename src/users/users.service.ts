import { Injectable } from "@nestjs/common";
import { NewUser } from "../types/users";
import { ID } from "../types/base";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./users.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private readonly usersRepository: any,
  ) {}

  getAll() {
    return this.usersRepository.findAll();
  }

  getById(id: ID) {
    return this.usersRepository.findByPk(id);
  }

  create(newUser: NewUser) {
    return this.usersRepository.create(newUser);
  }

  update(id: ID, newData: NewUser) {
    return this.usersRepository.update(newData, {
      where: {
        id,
      },
    });
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

  getAutoSuggestUsers(query: string, limit?: number) {
    return this.getAll();
  }
}
