import { CreateContactoDto } from '../../contacto/dto/create-contacto.dto';
export declare class CreateEmpresaDto {
    cif: string;
    nombre: string;
    telefono: string;
    localidad: string;
    correo: string;
    sector: string;
    contactos?: CreateContactoDto[];
}
