import { Request } from 'express';

export type User = {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
};

export interface IGetUserAuthInfoRequest extends Request {
  currentUser: User;
}
