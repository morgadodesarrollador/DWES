import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
import { Repository } from 'typeorm';
import { Contacto } from './entities/contacto.entity';
import { EmpresasService } from '../empresas/empresas.service';
import { ContactoRepository } from './entities/contacto.repository';
import { ApiNewContacto } from './interfaces/IContacto';
export declare class ContactoService {
    private readonly contactoRepo;
    private readonly contactoRepository;
    private readonly empresaService;
    constructor(contactoRepo: Repository<Contacto>, contactoRepository: ContactoRepository, empresaService: EmpresasService);
    create(createContactoDto: CreateContactoDto): Promise<ApiNewContacto>;
    findAll(): Promise<Contacto[]>;
    getContactos(): Promise<Contacto[]>;
    findOne(nif: string): Promise<Contacto>;
    update(nif: string, updateContactoDto: UpdateContactoDto): string;
    remove(nif: string): Promise<{
        message: string;
    }>;
    deleteAllContactos(): Promise<import("typeorm").DeleteResult>;
}
