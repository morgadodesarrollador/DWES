import { ContactoService } from './contacto.service';
import { CreateContactoDto } from './dto/create-contacto.dto';
import { UpdateContactoDto } from './dto/update-contacto.dto';
export declare class ContactoController {
    private readonly contactoService;
    constructor(contactoService: ContactoService);
    create(createContactoDto: CreateContactoDto): Promise<import("./interfaces/IContacto").ApiNewContacto>;
    findAll(): Promise<import("./entities/contacto.entity").Contacto[]>;
    getContactos(): Promise<import("./entities/contacto.entity").Contacto[]>;
    findOne(nif: string): Promise<import("./entities/contacto.entity").Contacto>;
    update(nif: string, updateContactoDto: UpdateContactoDto): string;
    remove(nif: string): Promise<{
        message: string;
    }>;
}
