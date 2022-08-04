import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ID } from '../types/base';
import { Groups } from './groups.model';
import { NewGroup } from '../types/groups';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Groups)
    private readonly groupsRepository: Repository<Groups>,
  ) {}

  getAll() {
    return this.groupsRepository.findAll();
  }

  getById(id: ID) {
    return this.groupsRepository.findByPk(id);
  }

  create(newGroup: NewGroup) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.groupsRepository.create(newGroup);
  }

  update(id: ID, newData: NewGroup) {
    return this.groupsRepository.update(newData, {
      where: {
        id,
      },
    });
  }

  delete(id: ID) {
    return this.groupsRepository.destroy({
      where: {
        id,
      },
    });
  }
}
