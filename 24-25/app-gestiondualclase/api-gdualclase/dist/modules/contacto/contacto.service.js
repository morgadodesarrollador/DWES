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
exports.ContactoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const contacto_entity_1 = require("./entities/contacto.entity");
const empresas_service_1 = require("../empresas/empresas.service");
const contacto_repository_1 = require("./entities/contacto.repository");
let ContactoService = class ContactoService {
    constructor(contactoRepo, contactoRepository, empresaService) {
        this.contactoRepo = contactoRepo;
        this.contactoRepository = contactoRepository;
        this.empresaService = empresaService;
    }
    async create(createContactoDto) {
        try {
            const { cif, ...campos } = createContactoDto;
            console.log(cif, campos);
            const contacto = this.contactoRepo.create({ ...campos });
            const relContactos = true;
            const dempresa = await this.empresaService.findOne(cif, relContactos);
            contacto.empresa = dempresa;
            await this.contactoRepo.save(contacto);
            const { empresa, ...dcontacto } = contacto;
            return {
                msg: "Contacto insertado con éxito",
                data: contacto,
                status: "ok"
            };
        }
        catch (error) {
            console.log(error);
            return {
                msg: "Error: Registro no insertado",
                data: null,
                status: "error"
            };
        }
    }
    findAll() {
        const contactos = this.contactoRepo.find({
            relations: {
                empresa: true
            }
        });
        return contactos;
    }
    async getContactos() {
        console.log('buscado');
        return await this.contactoRepository.findContactos();
    }
    async findOne(nif) {
        console.log(nif + 'buscado');
        const contacto = await this.contactoRepo.findOne({
            where: { nif },
            relations: {
                empresa: true,
            }
        });
        console.log(contacto);
        return contacto;
    }
    update(nif, updateContactoDto) {
        return `This action updates a #${nif} contacto`;
    }
    async remove(nif) {
        const contacto = await this.contactoRepo.findOne({ where: { nif } });
        if (!contacto) {
            return { message: `El contacto con NIF ${nif} no existe` };
        }
        await this.contactoRepo.delete(nif);
        return { message: `El contacto con NIF ${nif} ha sido eliminado` };
    }
    async deleteAllContactos() {
        const query = this.contactoRepo.createQueryBuilder('contacto');
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
exports.ContactoService = ContactoService;
exports.ContactoService = ContactoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contacto_entity_1.Contacto)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => empresas_service_1.EmpresasService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        contacto_repository_1.ContactoRepository,
        empresas_service_1.EmpresasService])
], ContactoService);
//# sourceMappingURL=contacto.service.js.map