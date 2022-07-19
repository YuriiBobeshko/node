import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersGroups } from './users-groups.model';

@Module({
  imports: [SequelizeModule.forFeature([UsersGroups])],
  controllers: [],
})
export class UsersGroupsModule {}
