import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { FilterProfesorDto } from './dto/filter-profesor.dto';
import { ProfesoresService } from './profesores.service';


interface Paramentros {
    nif: string;
    ciudad: string;
    edad: string
}
@Controller('profesores')
export class ProfesoresController {
    public total: Number;

    constructor(private readonly profesorServive: ProfesoresService){

    }

    @Get('save')
    async save(){
        return await this.profesorServive.save();
    }

    @Get('seed')
    loadData(){
        return this.profesorServive.loadProfesores()
        
    }

    @Get()
    findAll(){
        return this.profesorServive.findAll()
    }

    // @Get('filter')
    // getProfesorQuery(@Query('nif') nif: string, 
    //                  @Query('ciudad') ciudad: string, 
    //                  @Query('edad') edad: string){
            
    //     return 'Listar un Profesor con nif ' + nif + ' de ' + ciudad + ' ' + edad + ' años' ;

    // }

    @Get('filter')
    getProfesorQuery(@Body() query: FilterProfesorDto){
            
        return `Listar un Profesor de ${query.ciudad}  del area ${query.area}  con mas de ${+query.edad + 10} años` ;

    }
    // @Get('filter')
    // getProfesorQuery(@Query() query: FilterProfesorDto){
            
    //     return `Listar un Profesor de ${query.ciudad}  del area ${query.area}  con mas de ${+query.edad + 10} años` ;

    // }

    @Get(':nif-:ciudad')
    getProfesorParametros(@Param('nif') nif: string, @Param('ciudad') ciudad: string){
        return 'Listar un Profesor con nif ' + nif + ' de ' + ciudad;
    }

    @Get(':nif')
    findOne(@Param('nif') nif: string){

        return this.profesorServive.getProfesorNif(nif);
    }

    @Post()
    crear(@Body() newProfesor: CreateProfesorDto){
        console.log(newProfesor);
        return this.profesorServive.create(newProfesor)
    }

    @Patch()
    modificar(@Body() uptProfesor: CreateProfesorDto){
        return this.profesorServive.update(uptProfesor)
    }

    @Delete(':nif')
    eliminar(@Param('nif') nif: string){
        return this.profesorServive.remove(nif)
    }

   
}