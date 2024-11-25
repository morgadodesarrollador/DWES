import { IsEmail, IsNumber, IsOptional, IsString, Length, MinLength } from 'class-validator';



export class FilterProfesorDto {

    //profesores de Matemáticas de Madrid con mas de 40 años
    
    @IsString()
    @MinLength(5)
    area: string;

    @IsString()
    @MinLength(5)
    ciudad: string;

    @IsOptional()
    @IsString()
    edad: number;
}