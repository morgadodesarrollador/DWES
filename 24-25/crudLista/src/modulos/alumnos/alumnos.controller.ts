import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('alumnos')
export class AlumnosController {

    @Get()
    findAll(){
        return 'Listar todos los alumnos'
    }

    @Post()
    crear(){
        return 'Nuevo Alumno'
    }

    @Patch()
    modificar(){
        return 'modificar alumno'
    }

    @Delete()
    eliminar(){
        return 'eliminando un alumno'
    }
}
