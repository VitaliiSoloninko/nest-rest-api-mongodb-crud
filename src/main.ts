import { NestFactory } from '@nestjs/core';
// import * as process from 'process';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT, '0.0.0.0');
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
