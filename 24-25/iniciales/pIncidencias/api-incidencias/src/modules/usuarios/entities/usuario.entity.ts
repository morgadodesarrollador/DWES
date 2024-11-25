import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity('usuarios')
export class Usuario {

    @PrimaryColumn()
    idea: string;

    @Column({length: 30})
    nombre: string;

    @Column({length: 50})
    apellidos: string;

    @Column({length: 30, unique: true})
    correo: string;

    // @CreateDateColumn()
    // created_at: Date


}
