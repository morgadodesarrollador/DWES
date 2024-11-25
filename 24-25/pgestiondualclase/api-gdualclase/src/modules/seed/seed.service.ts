import { Injectable } from '@nestjs/common';
import * as seedEmpresas from '../seed/data/empresas.json';
import * as seedContactos from '../seed/data/contactos.json';
import * as seedProfesores from '../seed/data/profesor.json';
import * as seedSeguimientos from '../seed/data/seguimiento.json';


import { EmpresasService } from '../empresas/empresas.service';
import { ContactoService } from '../contacto/contacto.service';
import { ProfesorService } from '../profesor/profesor.service'
import { SeguimientoService } from '../seguimiento/seguimiento.service';


import { CreateContactoDto } from '../contacto/dto/create-contacto.dto';
import { CreateEmpresaDto } from '../empresas/dto/create-empresa.dto';
import { CreateProfesorDto } from '../profesor/dto/create-profesor.dto';
import { CreateSeguimientoDto } from '../seguimiento/dto/create-seguimiento.dto';


@Injectable()
export class SeedService {
  constructor(
    private readonly empresasService: EmpresasService,
    private readonly constactoService: ContactoService,
    private readonly profesoreService: ProfesorService,
    private readonly seguiientoService: SeguimientoService
    
  ){
  }
  async loadData() {

    await this.loadEmpresas();
    // await this.loadContactos();
    // await this.loadProfesores();
    // await this.loadSeguimientos();
  }

  async loadSeguimientos(){
    await this.seguiientoService.deleteAllSeguimientos();
    const insertPromisesSeguimientos = [];
    seedSeguimientos.forEach( async (seguimiento: CreateSeguimientoDto)  => {
      insertPromisesSeguimientos.push(this.seguiientoService.create(seguimiento));
      console.log(seguimiento)
   });
   const result = await Promise.all(insertPromisesSeguimientos);
   return result;
  }

  async loadEmpresas(){
    await this.empresasService.deleteAllEmpresas();
    const insertPromisesEmpresas = [];
    seedEmpresas.forEach( async (empresa: CreateEmpresaDto)  => {
      console.log(empresa)
      insertPromisesEmpresas.push(this.empresasService.create(empresa));
      
   });
   const result = await Promise.all(insertPromisesEmpresas);
   return result;
  }

  async loadContactos(){
    await this.constactoService.deleteAllContactos();
    const insertPromisesContatos = [];
    seedContactos.forEach( async (contacto: CreateContactoDto)  => {
      insertPromisesContatos.push(this.constactoService.create(contacto));
      //console.log(contacto)
   });
   const result = await Promise.all(insertPromisesContatos);
   return result;
  }

  async loadProfesores(){
    await this.profesoreService.deleteAllProfesores();
    const insertPromisesProfesores = [];
    seedProfesores.forEach( async (profesor: CreateProfesorDto)  => {
      insertPromisesProfesores.push(this.profesoreService.create(profesor));
      //console.log(profesor)
   });
   const result = await Promise.all(insertPromisesProfesores);
   return result;
  }

  
  
}
