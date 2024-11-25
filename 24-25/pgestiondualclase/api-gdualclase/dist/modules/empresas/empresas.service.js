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
exports.EmpresasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contacto_service_1 = require("../contacto/contacto.service");
const empresa_entity_1 = require("./entities/empresa.entity");
let EmpresasService = class EmpresasService {
    constructor(eRepository, contactoService) {
        this.eRepository = eRepository;
        this.contactoService = contactoService;
    }
    dividirEmpresayContactos(empresaDTO) {
        const { contactos, ...datosEmpresa } = empresaDTO;
        return {
            contactos,
            empresa: datosEmpresa
        };
    }
    async create(createEmpresaDto) {
        console.log('entra Servicio ...');
        const { contactos, ...datosEmpresa } = createEmpresaDto;
        try {
            const empresa = this.eRepository.create(createEmpresaDto);
            console.log("--->", empresa, createEmpresaDto);
            await this.eRepository.save(empresa);
            if (contactos) {
                contactos.map((contacto) => {
                    contacto.cif = empresa.cif;
                    this.contactoService.create(contacto);
                });
            }
            return {
                msg: 'Empresa insertado con éxito',
                data: empresa,
                status: 200
            };
        }
        catch (error) {
            console.log(error);
            throw new common_1.InternalServerErrorException("Ayuda al administrador");
        }
    }
    findAll() {
        const empresas = this.eRepository.find();
        return empresas;
    }
    update(id, updateEmpresaDto) {
        this.findOne;
        return `This action updates a #${id} empresa`;
    }
    remove(id) {
        return `This action removes a #${id} empresa`;
    }
    findOne(cif, relContactos = true) {
        console.log(relContactos);
        const empresa = this.eRepository.findOne({
            where: { cif },
            relations: {
                contactos: true,
                seguimientos: true
            }
        });
        return empresa;
    }
    async deleteAllEmpresas() {
        const query = this.eRepository.createQueryBuilder('empresa');
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
    async getContactos(cif) {
        const empresa = await this.eRepository.findOne({
            where: { cif },
            relations: {
                contactos: true,
                seguimientos: false
            }
        });
        return empresa.contactos;
    }
};
exports.EmpresasService = EmpresasService;
exports.EmpresasService = EmpresasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(empresa_entity_1.Empresa)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => contacto_service_1.ContactoService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        contacto_service_1.ContactoService])
], EmpresasService);
//# sourceMappingURL=empresas.service.js.map