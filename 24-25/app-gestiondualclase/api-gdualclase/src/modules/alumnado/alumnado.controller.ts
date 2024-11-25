import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnadoService } from './alumnado.service';
import { CreateAlumnadoDto } from './dto/create-alumnado.dto';
import { UpdateAlumnadoDto } from './dto/update-alumnado.dto';

@Controller('alumnado')
export class AlumnadoController {
  constructor(private readonly alumnadoService: AlumnadoService) {}

  @Post()
  create(@Body() createAlumnadoDto: CreateAlumnadoDto) {
    return this.alumnadoService.create(createAlumnadoDto);
  }

  @Get()
  findAll() {
    return this.alumnadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnadoDto: UpdateAlumnadoDto) {
    return this.alumnadoService.update(+id, updateAlumnadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnadoService.remove(+id);
  }
}
