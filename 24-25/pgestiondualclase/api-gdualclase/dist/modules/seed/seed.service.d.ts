import { EmpresasService } from '../empresas/empresas.service';
import { ContactoService } from '../contacto/contacto.service';
import { ProfesorService } from '../profesor/profesor.service';
import { SeguimientoService } from '../seguimiento/seguimiento.service';
export declare class SeedService {
    private readonly empresasService;
    private readonly constactoService;
    private readonly profesoreService;
    private readonly seguiientoService;
    constructor(empresasService: EmpresasService, constactoService: ContactoService, profesoreService: ProfesorService, seguiientoService: SeguimientoService);
    loadData(): Promise<void>;
    loadSeguimientos(): Promise<any[]>;
    loadEmpresas(): Promise<any[]>;
    loadContactos(): Promise<any[]>;
    loadProfesores(): Promise<any[]>;
}
