import { IsEmail, IsString, Length, MinLength } from 'class-validator';



export class CreateProfesorDto {

    @IsString()
    @Length(5)
    nif: string;
    
    @IsString()
    @MinLength(5)
    nombre: string;

    @IsString()
    modulo: string;

    @IsEmail()
    email: string;
}