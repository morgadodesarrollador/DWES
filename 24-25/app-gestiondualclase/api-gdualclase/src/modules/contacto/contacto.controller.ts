import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  create(@Body() createContactoDto: CreateContactoDto) {
    console.log(createContactoDto)
    return this.contactoService.create(createContactoDto);
  }

  @Get()
  findAll() {
    return this.contactoService.findAll();
  }
  @Get('seguimiento')
  getContactos() {
    return this.contactoService.getContactos();
  }
 

  @Get(':nif')
  findOne(@Param('nif') nif: string) {
    return this.contactoService.findOne(nif);
  }

  @Patch(':nif')
  update(@Param('nif') nif: string, @Body() updateContactoDto: UpdateContactoDto) {
    return this.contactoService.update(nif, updateContactoDto);
  }

  @Delete(':nif')
  remove(@Param('nif') nif: string) {
    return this.contactoService.remove(nif);
  }
}
