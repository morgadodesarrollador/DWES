import { forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Repository } from 'typeorm';
import { Contacto } from './entities/contacto.entity';
import { EmpresasService } from '../empresas/empresas.service';
import { Empresa } from '../empresas/entities/empresa.entity';
import { ContactoRepository } from './entities/contacto.repository';
import { ApiNewContacto } from './interfaces/IContacto';

@Injectable()
export class ContactoService {
  constructor(
    @InjectRepository(Contacto)
    private readonly contactoRepo: Repository<Contacto>,
    private readonly contactoRepository: ContactoRepository,
    @Inject(forwardRef(() => EmpresasService)) //servicios de modulos circulares
    private readonly empresaService: EmpresasService
    ){
      
    }
  async create(createContactoDto: CreateContactoDto): Promise<ApiNewContacto> { 
  
    try{
      const {cif, ...campos } = createContactoDto; //ES6
      console.log(cif, campos)
      // const contacto = this.contactoRepo.create(createContactoDto);
      const contacto = this.contactoRepo.create({...campos});
      const relContactos = true;
      const dempresa = await this.empresaService.findOne(cif, relContactos);
     
      contacto.empresa = dempresa; //puntero -- foreign key
      await this.contactoRepo.save(contacto);
      const { empresa, ...dcontacto} = contacto;
      
      return {
        msg: "Contacto insertado con éxito",
        data: contacto,
        status: "ok"
      }
    }catch (error){
      console.log(error);
      return {
        msg: "Error: Registro no insertado",
        data: null,
        status: "error"
      }
      // throw new InternalServerErrorException("Ayuda al administrador")
    
    }
  }

  findAll() {
    const contactos = this.contactoRepo.find({
      relations: {
        empresa: true
      }
    });
    return contactos;
  }
  async getContactos() {
    console.log('buscado')
    return await this.contactoRepository.findContactos();
   
  }

  async findOne(nif: string) {
    console.log(nif + 'buscado')
    const contacto = await this.contactoRepo.findOne({
      where: { nif },
      relations: {
        empresa: true,
      }
    });
    console.log(contacto)
    return contacto;
  }

  update(nif: string, updateContactoDto: UpdateContactoDto) {
    return `This action updates a #${nif} contacto`;
  }

  async remove(nif: string): Promise<{ message: string }> {
    const contacto = await this.contactoRepo.findOne({ where: {nif}});
    if (!contacto) {
      return { message: `El contacto con NIF ${nif} no existe` };
    }
    await this.contactoRepo.delete(nif);
    return { message: `El contacto con NIF ${nif} ha sido eliminado` };
  }

  async deleteAllContactos(){
    const query = this.contactoRepo.createQueryBuilder('contacto');
    try{
      return await query  
        .delete()
        .where({})
        .execute()
    }catch(error){
      throw new InternalServerErrorException('sysadmin ...')
    }
  }
}
