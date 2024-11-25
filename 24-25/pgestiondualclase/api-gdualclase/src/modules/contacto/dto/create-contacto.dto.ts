import { IsOptional, IsString } from "class-validator";

export class CreateContactoDto {

    @IsString()
    nif: string;

    @IsString()
    @IsOptional()
    cif: string;

    @IsString()
    nombre: string;

    @IsString()
    puesto: string;

    @IsString()
    telefono: string;

    @IsString()
    correo: string;

}
