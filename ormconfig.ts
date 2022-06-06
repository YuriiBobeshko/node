export default {
  type: 'postgres',
  host: 'localhost',
  port: 6000,
  username: 'postgres',
  driver: 'postgres',
  password: 'idazov',
  database: 'nodeJs',
  entities: [__dirname + 'src/**/*.entity.{ts,js}'],
  migrations: [__dirname + 'src/**/*.migration.{ts,js}'],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
};
