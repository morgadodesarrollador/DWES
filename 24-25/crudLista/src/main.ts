import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const Dirpublic = join(__dirname, '../public');
  app.useStaticAssets(Dirpublic);
  
  //Habilita el mecanismo de validación automática del DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: true
    })
  )
  await app.listen(3000);
}
bootstrap();
