import { Empresa } from "src/modules/empresas/entities/empresa.entity";
import { Seguimiento } from "src/modules/seguimiento/entities/seguimiento.entity";
export declare class Contacto {
    nif: string;
    nombre: string;
    puesto: string;
    telefono: string;
    correo: string;
    empresa: Empresa;
    seguimientos: Seguimiento;
}
