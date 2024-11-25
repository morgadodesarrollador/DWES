"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profesor_entity_1 = require("./entities/profesor.entity");
let ProfesorService = class ProfesorService {
    constructor(profesorRepo) {
        this.profesorRepo = profesorRepo;
    }
    async create(createProfesorDto) {
        try {
            const profesor = this.profesorRepo.create(createProfesorDto);
            await this.profesorRepo.save(profesor);
            return {
                msg: 'Profesor insertado con éxito',
                data: profesor,
                status: 200
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Ayuda al administrador");
        }
    }
    findAll() {
        const profesores = this.profesorRepo.find();
        return profesores;
    }
    findOne(nif) {
        const profesor = this.profesorRepo.findOne({
            where: { nif }
        });
        return profesor;
    }
    update(id, updateProfesorDto) {
        return `This action updates a #${id} profesor`;
    }
    remove(id) {
        return `This action removes a #${id} profesor`;
    }
    async deleteAllProfesores() {
        const query = this.profesorRepo.createQueryBuilder('profesor');
        try {
            return await query
                .delete()
                .where({})
                .execute();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('sysadmin ...');
        }
    }
};
exports.ProfesorService = ProfesorService;
exports.ProfesorService = ProfesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profesor_entity_1.Profesor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfesorService);
//# sourceMappingURL=profesor.service.js.map