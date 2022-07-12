import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Users } from '../users/users.model';
import { UsersGroups } from '../users-groups/users-groups.model';
import { Permissions } from '../types/groups';

@Table
export class Groups extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: false,
  })
  permissions: Array<Permissions>;

  @BelongsToMany(() => Users, () => UsersGroups)
  users: Users[];
}
