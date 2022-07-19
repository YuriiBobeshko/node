import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Groups } from './groups.model';

@Module({
  imports: [SequelizeModule.forFeature([Groups])],
  providers: [GroupsService],
  controllers: [GroupsController],
})
export class GroupsModule {}
