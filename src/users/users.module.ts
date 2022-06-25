import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersGateway } from './users.gateway';
import { UsersGroups } from '../users-groups/users-groups.model';

@Module({
  imports: [SequelizeModule.forFeature([Users]), SequelizeModule.forFeature([UsersGroups])],
  providers: [UsersService, UsersGateway],
  controllers: [UsersController],
})
export class UsersModule {}
