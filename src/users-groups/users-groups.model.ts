import { Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { Groups } from '../groups/groups.model';

@Table
export class UsersGroups extends Model {
  @ForeignKey(() => Users)
  @PrimaryKey
  @Column
  userId: number;

  @ForeignKey(() => Groups)
  @PrimaryKey
  @Column
  groupId: number;
}
