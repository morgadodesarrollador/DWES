import { Repository } from 'typeorm';
import { ContactoService } from '../contacto/contacto.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
export declare class EmpresasService {
    private readonly eRepository;
    private readonly contactoService;
    constructor(eRepository: Repository<Empresa>, contactoService: ContactoService);
    dividirEmpresayContactos(empresaDTO: CreateEmpresaDto): {
        contactos: import("../contacto/dto/create-contacto.dto").CreateContactoDto[];
        empresa: {
            cif: string;
            nombre: string;
            telefono: string;
            localidad: string;
            correo: string;
            sector: string;
        };
    };
    create(createEmpresaDto: CreateEmpresaDto): Promise<{
        msg: string;
        data: Empresa;
        status: number;
    }>;
    findAll(): Promise<Empresa[]>;
    update(id: number, updateEmpresaDto: UpdateEmpresaDto): string;
    remove(id: number): string;
    findOne(cif: string, relContactos?: boolean): Promise<Empresa>;
    deleteAllEmpresas(): Promise<import("typeorm").DeleteResult>;
    getContactos(cif: string): Promise<import("../contacto/entities/contacto.entity").Contacto[]>;
}
