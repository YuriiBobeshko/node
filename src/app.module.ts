import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/users.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      host: 'localhost',
      port: 6000,
      username: 'postgres',
      password: 'idazov',
      database: 'nodeJs',
      dialect: 'postgres',
      models: [Users],
      logging: console.log,
      synchronize: true,
      autoLoadModels: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
