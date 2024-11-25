import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresasModule } from './modules/empresas/empresas.module';
import { AlumnadoModule } from './modules/alumnado/alumnado.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './modules/seed/seed.module';
import { ContactoModule } from './modules/contacto/contacto.module';
import { SeguimientoModule } from './modules/seguimiento/seguimiento.module';
import { ProfesorModule } from './modules/profesor/profesor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    EmpresasModule, AlumnadoModule, SeedModule, ContactoModule, SeguimientoModule, ProfesorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
