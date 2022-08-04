import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter } from './shared/error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT || 3000);
  app.useGlobalFilters(new ErrorFilter());
  return app;
}

bootstrap();
