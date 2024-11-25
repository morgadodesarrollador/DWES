import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {

  // 1-. UsuarioService INYECTA el repositorio uRepository : Repository<Usuario>
  constructor(
    @InjectRepository(Usuario) 
    private readonly uRepository: Repository<Usuario>
  ){
    
  }
  async create(createUsuarioDto: CreateUsuarioDto) {
    try{
      //creamos el objeto TypeORM alumno a instertar 
      const alumno = this.uRepository.create(createUsuarioDto);
      //lanzamos el método asíncrono save(insertar) que lanza la insercción al Postgress
      //internamente hará un insert into(....) 
      await this.uRepository.save(alumno);
      return {
        msg: 'Alumno insertado con éxito',
        data: alumno,
        status: 200
      }
    }catch (error){
      console.log(error);
    throw new InternalServerErrorException("Ayuda al administrador")
    
    }
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
