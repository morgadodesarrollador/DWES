import { forwardRef, Module } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoController } from './contacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacto } from './entities/contacto.entity';
import { EmpresasModule } from '../empresas/empresas.module';
import { ContactoRepository } from './entities/contacto.repository';

@Module({
  imports: [//modulos circulares
    forwardRef ( () => EmpresasModule ) ,
    TypeOrmModule.forFeature([Contacto, ContactoRepository]),
  ],
  controllers: [ContactoController],
  providers: [ContactoRepository,ContactoService],
  exports: [ ContactoService, TypeOrmModule ]
})
export class ContactoModule {}
