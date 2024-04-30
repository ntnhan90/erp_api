import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get<string>('PORT'));
}
bootstrap();
