import { Contacto } from '../../contacto/entities/contacto.entity';
import { Seguimiento } from '../../seguimiento/entities/seguimiento.entity';
export declare class Empresa {
    cif: string;
    nombre: string;
    telefono: string;
    localidad: string;
    sector: string;
    correo: string;
    contactos: Contacto[];
    seguimientos: Seguimiento[];
}
