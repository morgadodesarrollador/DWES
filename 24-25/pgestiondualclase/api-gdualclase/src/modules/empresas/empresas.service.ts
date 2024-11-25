import { forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactoService } from '../contacto/contacto.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {

  constructor(
    @InjectRepository(Empresa) 
    private readonly eRepository: Repository<Empresa>,
    @Inject(forwardRef(() => ContactoService)) //servicios de modulos circulares
    private readonly contactoService: ContactoService
  ){
    
  }

  dividirEmpresayContactos (empresaDTO: CreateEmpresaDto){
    const { contactos, ...datosEmpresa } = empresaDTO;
    return {
      contactos,
      empresa: datosEmpresa
    }
  }
  async create(createEmpresaDto: CreateEmpresaDto) {
    console.log('entra Servicio ...')
    // const { contactos, empresa: datosEmpresa} = this.dividirEmpresayContactos(createEmpresaDto);
    const { contactos, ...datosEmpresa } = createEmpresaDto;
    // console.log(datosEmpresa.cif);
    // console.log(contactos)
    
    try{
     
      const empresa = this.eRepository.create(createEmpresaDto);
      console.log("--->", empresa, createEmpresaDto)
      await this.eRepository.save(empresa);

      if (contactos){
        contactos.map( (contacto ) => {
          contacto.cif = empresa.cif;
          this.contactoService.create(contacto)
        })
      }
      
      return {
        msg: 'Empresa insertado con éxito',
        data: empresa,
        status: 200
      }
    }catch (error){
      console.log(error);
    throw new InternalServerErrorException("Ayuda al administrador")
    
    }
  }

  findAll() {
    const empresas = this.eRepository.find();
    return empresas;
  }
  

  

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    this.findOne
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }

  findOne(cif: string, relContactos: boolean = true) {
    console.log (relContactos)
    const empresa = this.eRepository.findOne({
      where: { cif },
      relations: {
        contactos: true, 
        seguimientos: true
      }
    });
    
    return empresa;
  }

  async deleteAllEmpresas(){
    const query = this.eRepository.createQueryBuilder('empresa');
    try{
      return await query  
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('sysadmin ...')
    }
  }
 async getContactos(cif: string){
    const empresa = await this.eRepository.findOne({
      where: { cif },
      relations: {
        contactos: true, 
        seguimientos: false
      }
    });
    
    return empresa.contactos;
  }
}
