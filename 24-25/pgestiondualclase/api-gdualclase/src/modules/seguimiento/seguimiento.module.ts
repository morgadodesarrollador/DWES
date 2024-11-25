import { Module } from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';
import { SeguimientoController } from './seguimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguimiento } from './entities/seguimiento.entity';
import { EmpresasModule } from '../empresas/empresas.module';
import { ProfesorModule } from '../profesor/profesor.module';
import { ContactoModule } from '../contacto/contacto.module';

@Module({
  imports: [
    EmpresasModule, ProfesorModule, ContactoModule,
    TypeOrmModule.forFeature([Seguimiento]),
  ],
  controllers: [SeguimientoController],
  providers: [SeguimientoService],
  exports: [ SeguimientoService ]
})
export class SeguimientoModule {}
