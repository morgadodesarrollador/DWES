import { Empresa } from "src/modules/empresas/entities/empresa.entity";
import { Seguimiento } from "src/modules/seguimiento/entities/seguimiento.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('Contacto')
export class Contacto {
    // @PrimaryGeneratedColumn()
    // contactoid: number;

    @PrimaryColumn()
    nif: string;

    @Column()
    nombre: string;

    @Column()
    puesto: string;

    @Column()
    telefono: string;

    @Column({length: 100, unique: true})
    correo: string;

    //1contacto --> 1 
    // @OneToOne(() => Empresa)
    // @JoinColumn()
    // empresa: Empresa;

    @ManyToOne(
        () => Empresa,
        (empresa) => empresa.contactos,
        { eager: false }
    )
    empresa: Empresa;


    @OneToMany(() => Seguimiento, (seguimiento) => seguimiento.contacto )
    seguimientos: Seguimiento
}






























