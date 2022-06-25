import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersGateway } from './users.gateway';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService, UsersGateway],
  exports: [],
})
export class UsersModule {}
