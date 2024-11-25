import { Repository } from 'typeorm';
import { EmpresasService } from '../empresas/empresas.service';
import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from './dto/update-seguimiento.dto';
import { Seguimiento } from './entities/seguimiento.entity';
import { ProfesorService } from '../profesor/profesor.service';
import { ContactoService } from '../contacto/contacto.service';
export declare class SeguimientoService {
    private readonly seguimientoRepo;
    private readonly empresaService;
    private readonly profesorService;
    private readonly contactoService;
    constructor(seguimientoRepo: Repository<Seguimiento>, empresaService: EmpresasService, profesorService: ProfesorService, contactoService: ContactoService);
    create(createSeguimientoDto: CreateSeguimientoDto): Promise<{
        msg: string;
        data: Seguimiento;
        status: number;
    }>;
    findAll(): string;
    findOne(segId: number): Promise<Seguimiento>;
    update(segId: number, updateSeguimientoDto: UpdateSeguimientoDto): Promise<{
        msg: string;
        data: Seguimiento;
        status: number;
    }>;
    remove(id: number): string;
    deleteAllSeguimientos(): Promise<import("typeorm").DeleteResult>;
}
