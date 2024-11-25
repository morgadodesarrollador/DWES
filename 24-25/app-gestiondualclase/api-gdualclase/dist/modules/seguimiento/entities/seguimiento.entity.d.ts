import { Contacto } from "src/modules/contacto/entities/contacto.entity";
import { Empresa } from '../../empresas/entities/empresa.entity';
import { Profesor } from '../../profesor/entities/profesor.entity';
export declare class Seguimiento {
    segId: number;
    fecha: string;
    tipo_contacto: string;
    notas: string;
    acuerdos: string;
    empresa: Empresa;
    profesor: Profesor;
    contacto: Contacto;
}
