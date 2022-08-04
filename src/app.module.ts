import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from './seeds/seeder.module';
import { dbConfig } from './config/db';
import { GroupsModule } from './groups/groups.module';
import { UsersGroupsModule } from './users-groups/users-groups.module';
import { ErrorFilter } from './shared/error.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [SequelizeModule.forRoot(dbConfig), UsersModule, SeederModule, GroupsModule, UsersGroupsModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorFilter,
    },
  ],
})
export class AppModule {}
