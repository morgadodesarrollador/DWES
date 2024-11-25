import { Seguimiento } from "src/modules/seguimiento/entities/seguimiento.entity";
export declare class Profesor {
    nif: string;
    nombre: string;
    puesto: string;
    telefono: string;
    correo: string;
    ciclo: string;
    curso: string;
    seguimientos: Seguimiento;
}
