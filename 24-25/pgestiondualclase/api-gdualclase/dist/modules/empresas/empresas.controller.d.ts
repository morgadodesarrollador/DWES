import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
export declare class EmpresasController {
    private readonly empresasService;
    constructor(empresasService: EmpresasService);
    create(createEmpresaDto: CreateEmpresaDto): Promise<{
        msg: string;
        data: import("./entities/empresa.entity").Empresa;
        status: number;
    }>;
    findAll(): Promise<import("./entities/empresa.entity").Empresa[]>;
    findOne(cif: string): Promise<import("./entities/empresa.entity").Empresa>;
    update(id: string, updateEmpresaDto: UpdateEmpresaDto): string;
    remove(id: string): string;
    getContactos(cif: string): Promise<import("../contacto/entities/contacto.entity").Contacto[]>;
}
