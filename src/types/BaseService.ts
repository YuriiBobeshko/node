import { ID } from './base';

export abstract class BaseService<T, R = T> {
  abstract getAll(): T[];

  abstract getById(id: ID): T | undefined;

  abstract create(data: R): T;

  abstract update(id: ID, data: R): T | undefined;

  abstract archive(id: ID): T[] | undefined;

  abstract delete(id: ID): T[] | undefined;
}
