import { IsString } from "class-validator";

export class CreateProfesorDto {
   
    @IsString()
    nif: string;

    @IsString()
    nombre: string;

    @IsString()
    puesto: string;

    @IsString()
    telefono: string;

    @IsString()
    correo: string;

    @IsString()
    ciclo: string;

    @IsString()
    curso: string;
    
    
}
