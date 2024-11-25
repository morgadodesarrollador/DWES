import { forwardRef, Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { ContactoModule } from '../contacto/contacto.module';

@Module({
  imports: [ //modulos circulares
    forwardRef ( () => ContactoModule ) ,
    TypeOrmModule.forFeature([Empresa]),
  ],
  controllers: [EmpresasController],
  providers: [EmpresasService],
  exports: [ EmpresasService ]
})
export class EmpresasModule {}
