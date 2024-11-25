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
exports.SeguimientoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const empresas_service_1 = require("../empresas/empresas.service");
const seguimiento_entity_1 = require("./entities/seguimiento.entity");
const profesor_service_1 = require("../profesor/profesor.service");
const contacto_service_1 = require("../contacto/contacto.service");
let SeguimientoService = class SeguimientoService {
    constructor(seguimientoRepo, empresaService, profesorService, contactoService) {
        this.seguimientoRepo = seguimientoRepo;
        this.empresaService = empresaService;
        this.profesorService = profesorService;
        this.contactoService = contactoService;
    }
    async create(createSeguimientoDto) {
        console.log(createSeguimientoDto);
        try {
            const { cif, nif_profesor, nif_contacto, ...campos } = createSeguimientoDto;
            const seguimiento = this.seguimientoRepo.create({ ...campos });
            const empresa = await this.empresaService.findOne(cif);
            const profesor = await this.profesorService.findOne(nif_profesor);
            const contacto = await this.contactoService.findOne(nif_contacto);
            seguimiento.empresa = empresa;
            seguimiento.profesor = profesor;
            seguimiento.contacto = contacto;
            console.log(cif, empresa);
            await this.seguimientoRepo.save(seguimiento);
            return {
                msg: 'Seguimiento insertado con éxito',
                data: seguimiento,
                status: 200
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Ayuda al administrador");
        }
    }
    findAll() {
        return `This action returns all seguimiento`;
    }
    findOne(segId) {
        const seguimiento = this.seguimientoRepo.findOne({
            where: { segId },
            relations: {
                contacto: true,
                profesor: true,
                empresa: true
            }
        });
        return seguimiento;
    }
    async update(segId, updateSeguimientoDto) {
        console.log("Actualizando");
        console.log(updateSeguimientoDto);
        const seguimiento = await this.findOne(updateSeguimientoDto.segId);
        console.log(seguimiento);
        if (!seguimiento) {
            throw new common_1.NotFoundException(`Seguimiento with ID ${segId} not found`);
        }
        seguimiento.tipo_contacto = updateSeguimientoDto.tipo_contacto;
        seguimiento.fecha = updateSeguimientoDto.fecha;
        seguimiento.notas = updateSeguimientoDto.notas;
        seguimiento.acuerdos = updateSeguimientoDto.acuerdos;
        const profesor = await this.profesorService.findOne(updateSeguimientoDto.nif_profesor);
        const contacto = await this.contactoService.findOne(updateSeguimientoDto.nif_contacto);
        seguimiento.contacto = contacto;
        seguimiento.profesor = profesor;
        await this.seguimientoRepo.save(seguimiento);
        return {
            msg: 'Seguimiento actualizado con éxito',
            data: seguimiento,
            status: 200
        };
    }
    remove(id) {
        return `This action removes a #${id} seguimiento`;
    }
    async deleteAllSeguimientos() {
        const query = this.seguimientoRepo.createQueryBuilder('seguimiento');
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
exports.SeguimientoService = SeguimientoService;
exports.SeguimientoService = SeguimientoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seguimiento_entity_1.Seguimiento)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        empresas_service_1.EmpresasService,
        profesor_service_1.ProfesorService,
        contacto_service_1.ContactoService])
], SeguimientoService);
//# sourceMappingURL=seguimiento.service.js.map