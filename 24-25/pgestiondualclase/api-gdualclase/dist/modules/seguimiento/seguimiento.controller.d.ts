import { SeguimientoService } from './seguimiento.service';
import { CreateSeguimientoDto } from './dto/create-seguimiento.dto';
import { UpdateSeguimientoDto } from './dto/update-seguimiento.dto';
export declare class SeguimientoController {
    private readonly seguimientoService;
    constructor(seguimientoService: SeguimientoService);
    create(createSeguimientoDto: CreateSeguimientoDto): Promise<{
        msg: string;
        data: import("./entities/seguimiento.entity").Seguimiento;
        status: number;
    }>;
    findAll(): string;
    findOne(segId: number): Promise<import("./entities/seguimiento.entity").Seguimiento>;
    update(id: string, updateSeguimientoDto: UpdateSeguimientoDto): Promise<{
        msg: string;
        data: import("./entities/seguimiento.entity").Seguimiento;
        status: number;
    }>;
    remove(id: string): string;
}
