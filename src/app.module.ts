import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeederModule } from './seeds/seeder.module';
import { dbConfig } from './config/db';

@Module({
  imports: [SequelizeModule.forRoot(dbConfig), UsersModule, SeederModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
