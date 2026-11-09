import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";

export class CreateUsuarioDto {

    @IsString()
    @MinLength(2)
    @MaxLength(50)
    username: string | undefined;

    @IsEmail({},{
        message:'El correo electrónico no es válido'
    }) 
    email?: string;

    @IsString()
    @MinLength(5)
    @MaxLength(20)
    password?: string;
    
}
