import { Repository, DataSource } from 'typeorm';
import { Contacto } from './contacto.entity';
export declare class ContactoRepository extends Repository<Contacto> {
    private datasource;
    constructor(datasource: DataSource);
    findContactos(): Promise<Contacto[]>;
}
