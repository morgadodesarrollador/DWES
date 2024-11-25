
import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateContactoDto } from '../../contacto/dto/create-contacto.dto';

export class CreateEmpresaDto {

    // @IsString()
    // codigo: number;

    @IsString()
    cif: string;

    @IsString()
    nombre: string;

    @IsString()
    telefono: string;

    @IsString()
    localidad: string;

    @IsString()
    correo: string;

    @IsString()
    sector: string;

    // @IsOptional()
    @ValidateNested()
    @Type( () => CreateContactoDto)
    contactos?: CreateContactoDto[]


}
