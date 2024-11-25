import { Injectable } from '@nestjs/common';
import { CreateAlumnadoDto } from './dto/create-alumnado.dto';
import { UpdateAlumnadoDto } from './dto/update-alumnado.dto';

@Injectable()
export class AlumnadoService {
  create(createAlumnadoDto: CreateAlumnadoDto) {
    return 'This action adds a new alumnado';
  }

  findAll() {
    return `This action returns all alumnado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnado`;
  }

  update(id: number, updateAlumnadoDto: UpdateAlumnadoDto) {
    return `This action updates a #${id} alumnado`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnado`;
  }
}
