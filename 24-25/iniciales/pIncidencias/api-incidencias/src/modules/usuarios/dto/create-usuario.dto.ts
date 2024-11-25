
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    idea: string;

    @IsString()
    nombre: string;

    @IsString()
    apellidos: string;

    @IsString()
    correo: string;

    // @IsDate()
    // created_at: Date
  
}
