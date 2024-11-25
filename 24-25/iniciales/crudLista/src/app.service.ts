import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): any {
    return {
      "statusCode": 200,
      "error": "None",
      "message": ["Datos Ok"]
    };
  }

  getHola(): string {
    return 'Hola Caracola!';
  }
}
