import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { EmpresasModule } from '../empresas/empresas.module';
import { ContactoModule } from '../contacto/contacto.module';
import { ProfesorModule } from '../profesor/profesor.module'
import { SeguimientoModule } from '../seguimiento/seguimiento.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    EmpresasModule, 
    ContactoModule,
    ProfesorModule, 
    SeguimientoModule
  ]
})
export class SeedModule {}
