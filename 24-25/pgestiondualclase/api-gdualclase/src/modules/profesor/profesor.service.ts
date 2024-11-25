import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './entities/profesor.entity';

@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepo: Repository<Profesor>,

  ){}
  async create(createProfesorDto: CreateProfesorDto) {
    try{
      const profesor = this.profesorRepo.create(createProfesorDto);
      await this.profesorRepo.save(profesor);
      return {
        msg: 'Profesor insertado con éxito',
        data: profesor,
        status: 200
      }
    }catch(error){
      console.log(error);
    throw new InternalServerErrorException("Ayuda al administrador")
    }
  }

  findAll() {
    const profesores = this.profesorRepo.find();
    return profesores;
  }

  findOne(nif: string) {
    const profesor = this.profesorRepo.findOne({
      where: { nif }
    });
    
    return profesor;
  }

  update(id: number, updateProfesorDto: UpdateProfesorDto) {
    return `This action updates a #${id} profesor`;
  }

  remove(id: number) {
    return `This action removes a #${id} profesor`;
  }

  async deleteAllProfesores(){
    const query = this.profesorRepo.createQueryBuilder('profesor');
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
