import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './modulos/alumnos/alumnos.module';
import { ProfesoresModule } from './modulos/profesores/profesores.module';

AlumnosModule
@Module({
  imports: [
    AlumnosModule,
    ProfesoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
