import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSeguimientoDto {
// Si existe, actualiza; si no, crea uno nuevo.
    @IsNumber()
    @IsOptional()
    segId: number;

    @IsString()
    cif: string;

    @IsString()
    nif_contacto: string;

    @IsString()
    nif_profesor: string;

    @IsString()
    fecha: string;

    @IsString()
    tipo_contacto: string;

    @IsString()
    notas: string;

    @IsString()
    acuerdos: string;



}
