import { AlumnadoService } from './alumnado.service';
import { CreateAlumnadoDto } from './dto/create-alumnado.dto';
import { UpdateAlumnadoDto } from './dto/update-alumnado.dto';
export declare class AlumnadoController {
    private readonly alumnadoService;
    constructor(alumnadoService: AlumnadoService);
    create(createAlumnadoDto: CreateAlumnadoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAlumnadoDto: UpdateAlumnadoDto): string;
    remove(id: string): string;
}
