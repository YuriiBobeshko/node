import { BelongsToMany, Column, DataType, Model, Repository, Table } from 'sequelize-typescript';
import { UsersGroups } from '../users-groups/users-groups.model';
import { Groups } from '../groups/groups.model';

@Table
export class Users extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  login: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isDeleted: boolean;

  @BelongsToMany(() => Groups, () => UsersGroups)
  groups: Groups[];

  static async isLoginUniq(usersRepository: Repository<Users>, login: string): Promise<boolean> {
    return !usersRepository.findOne({
      where: {
        login,
      },
    });
  }
}
