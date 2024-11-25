import { Seguimiento } from "src/modules/seguimiento/entities/seguimiento.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('Profesor')
export class Profesor {
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

    @Column()
    ciclo: string;

    @Column()
    curso: string;

    @OneToMany( 
        () => Seguimiento, 
        (seguimiento) => seguimiento.profesor)
    seguimientos: Seguimiento
}
