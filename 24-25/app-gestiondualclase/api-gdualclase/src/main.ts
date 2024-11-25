import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      forbidNonWhitelisted: true
    })
  )
  app.enableCors({
     origin: '*',
     allowedHeaders: 'Content-Type'
  });
  await app.listen(3000);
}
bootstrap();
