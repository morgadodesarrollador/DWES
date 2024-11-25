import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Contacto } from '../../contacto/entities/contacto.entity';
import { Seguimiento } from '../../seguimiento/entities/seguimiento.entity';


@Entity('Empresa')
export class Empresa {

    // @PrimaryGeneratedColumn()
    // codigo: number;

    @PrimaryColumn()
    cif: string;

    @Column()
    nombre: string;

    @Column()
    telefono: string;

    @Column()
    localidad: string;

    @Column()
    sector: string;


    @Column({length: 100, unique: true})
    correo: string;

    // @CreateDateColumn()
    // created_at: Date

   
    //1 emopresa --> 1 contacto
    // @OneToOne(
    //     () => Contacto, 
    //     (contacto) => contacto.empresa)
    // contacto: Contacto;
    
    //1 emopresa --> Muchos contacto
   
    @OneToMany(
        () => Contacto, 
        (contacto) => contacto.empresa,
        { eager: true } //analizar error en la carga seed BD vacia
    )
    contactos: Contacto[];



    //1 empresa --> Muchos seguimientos
    @OneToMany(
        () => Seguimiento, 
        (seguimiento) => seguimiento.empresa)
    seguimientos: Seguimiento[]
}















































