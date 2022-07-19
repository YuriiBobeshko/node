import { ID } from './base';

export type User = {
  readonly id: ID;
  readonly login: string;
  readonly password: string;
  readonly age: number;
  readonly isDeleted: boolean;
};

export type NewUser = Omit<User, 'id' | 'isDeleted'>;
