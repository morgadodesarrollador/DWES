import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorController {
    private readonly profesorService;
    constructor(profesorService: ProfesorService);
    create(createProfesorDto: CreateProfesorDto): Promise<{
        msg: string;
        data: import("./entities/profesor.entity").Profesor;
        status: number;
    }>;
    findAll(): Promise<import("./entities/profesor.entity").Profesor[]>;
    update(id: string, updateProfesorDto: UpdateProfesorDto): string;
    remove(id: string): string;
}
