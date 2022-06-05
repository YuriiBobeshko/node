import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6000,
      username: 'postgres',
      password: 'idazov',
      database: 'nodeJs',
      entities: [__dirname + 'src/**/*.entity.{ts,js}'],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
