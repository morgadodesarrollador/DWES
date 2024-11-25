import { CreateAlumnadoDto } from './dto/create-alumnado.dto';
import { UpdateAlumnadoDto } from './dto/update-alumnado.dto';
export declare class AlumnadoService {
    create(createAlumnadoDto: CreateAlumnadoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAlumnadoDto: UpdateAlumnadoDto): string;
    remove(id: number): string;
}
