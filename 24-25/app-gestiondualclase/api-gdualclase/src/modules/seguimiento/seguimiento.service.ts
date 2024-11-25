import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmpresasService } from '../empresas/empresas.service';
import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from './dto/update-seguimiento.dto';
import { Seguimiento } from './entities/seguimiento.entity';
import { ProfesorService } from '../profesor/profesor.service';
import { ContactoService } from '../contacto/contacto.service';
import { Console } from 'console';

@Injectable()
export class SeguimientoService {
  constructor(
    @InjectRepository(Seguimiento)
    private readonly seguimientoRepo: Repository<Seguimiento>,
    private readonly empresaService: EmpresasService,
    private readonly profesorService: ProfesorService,
    private readonly contactoService: ContactoService
  ){}
  async create(createSeguimientoDto: CreateSeguimientoDto) {
    console.log(createSeguimientoDto);
    try{
      const { cif, nif_profesor, nif_contacto,
         ...campos } = createSeguimientoDto; //ES6

      const seguimiento = this.seguimientoRepo.create({...campos});
      const empresa = await this.empresaService.findOne(cif);
      const profesor = await this.profesorService.findOne(nif_profesor);
      const contacto = await this.contactoService.findOne(nif_contacto);

      seguimiento.empresa = empresa;
      seguimiento.profesor = profesor;
      seguimiento.contacto = contacto;
      console.log(cif, empresa);
      await this.seguimientoRepo.save(seguimiento);
      return {
        msg: 'Seguimiento insertado con éxito',
        data: seguimiento,
        status: 200
      }
    }catch (error){
      console.log(error);
    throw new InternalServerErrorException("Ayuda al administrador")
    
    }
  }

  findAll() {
    return `This action returns all seguimiento`;
  }

  findOne(segId: number) {
    const seguimiento = this.seguimientoRepo.findOne({
      where: { segId },
      relations: {
        contacto: true,
        profesor: true,
        empresa: true
      }
    })
    return seguimiento
  }

  async update(segId:number, updateSeguimientoDto: UpdateSeguimientoDto) {
    // const seguimiento = this.findOne(segId);
    console.log("Actualizando");
    console.log(updateSeguimientoDto)
    const seguimiento = await this.findOne(updateSeguimientoDto.segId);
    console.log(seguimiento);
    if (!seguimiento) {
      throw new NotFoundException(`Seguimiento with ID ${segId} not found`);
    }
    seguimiento.tipo_contacto = updateSeguimientoDto.tipo_contacto;
    seguimiento.fecha = updateSeguimientoDto.fecha;
    seguimiento.notas = updateSeguimientoDto.notas;
    seguimiento.acuerdos = updateSeguimientoDto.acuerdos;
    const profesor = await this.profesorService.findOne(updateSeguimientoDto.nif_profesor);
    const contacto = await this.contactoService.findOne(updateSeguimientoDto.nif_contacto);
    seguimiento.contacto = contacto;
    seguimiento.profesor = profesor;
    await this.seguimientoRepo.save(seguimiento);

      return {
        msg: 'Seguimiento actualizado con éxito',
        data: seguimiento,
        status: 200
      }
  }

  remove(id: number) {
    return `This action removes a #${id} seguimiento`;
  }
  async deleteAllSeguimientos(){
    const query = this.seguimientoRepo.createQueryBuilder('seguimiento');
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
