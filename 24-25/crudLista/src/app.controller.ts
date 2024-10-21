import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello() {

    /*
      0-. Validar los parametros de entrada que vienen desde internet --> DTO (clases externas).
      1-. Los parámetros que llegan al controlador NOS GARANTIZAMOS que estám validados
      2-. Pasa los datos al sevicio <---> BD
      3-. Recoge la data del servicio
      4-. Devuelve el JSON (data)
      */
    return this.appService.getHello();    
  }

  @Get('/hola')
  getHola(): string {
    /*
      1-. Validar los parametros de entrada que vienen desde internet
    */
    return this.appService.getHola();    
  }
 
  @Post()
  create(@Body() datos){
    console.log(datos);
    console.log('Datos recibidos correctamente');
    //llamar al servicio
    //devolver datos del servicio
    return datos;
  }




  

}
