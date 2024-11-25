import { Contacto } from "src/modules/contacto/entities/contacto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Empresa } from '../../empresas/entities/empresa.entity';
import { Profesor } from '../../profesor/entities/profesor.entity';

@Entity('Seguimiento')
export class Seguimiento {

    @PrimaryGeneratedColumn()
    segId: number;

    // @Column()
    // cif: string;

    // @Column()
    // nif_contacto: string;

    // @Column()
    // nif_profesor: string;

    @Column()
    fecha: string;

    @Column()
    tipo_contacto: string;

    @Column()
    notas: string;

    @Column()
    acuerdos: string;

    @ManyToOne(
        () => Empresa, 
        (empresa) => empresa.seguimientos,
        { cascade: true, eager: true }
    )
    empresa: Empresa

    @ManyToOne(
        () => Profesor, 
        (profesor) => profesor.seguimientos,
        { cascade: true, eager: true }
    )
    profesor: Profesor

    @ManyToOne(
        () => Contacto, 
        (contacto) => contacto.seguimientos,
        { cascade: true, eager: true }
    )
    contacto: Contacto
}

