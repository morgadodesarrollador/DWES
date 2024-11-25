import { Repository } from 'typeorm';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
import { Profesor } from './entities/profesor.entity';
export declare class ProfesorService {
    private readonly profesorRepo;
    constructor(profesorRepo: Repository<Profesor>);
    create(createProfesorDto: CreateProfesorDto): Promise<{
        msg: string;
        data: Profesor;
        status: number;
    }>;
    findAll(): Promise<Profesor[]>;
    findOne(nif: string): Promise<Profesor>;
    update(id: number, updateProfesorDto: UpdateProfesorDto): string;
    remove(id: number): string;
    deleteAllProfesores(): Promise<import("typeorm").DeleteResult>;
}
