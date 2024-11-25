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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const contacto_entity_1 = require("./contacto.entity");
let ContactoRepository = class ContactoRepository extends typeorm_1.Repository {
    constructor(datasource) {
        super(contacto_entity_1.Contacto, datasource.createEntityManager());
        this.datasource = datasource;
    }
    async findContactos() {
        try {
            return await this.createQueryBuilder('Contacto')
                .select([
                'Contacto.nif', 'Contacto.nombre',
            ])
                .addSelect([
                'Empresa.cif', 'Empresa.nombre'
            ])
                .leftJoin('Contacto.empresa', 'Empresa')
                .orderBy('Contacto.nombre', 'DESC')
                .getMany();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error contactos');
        }
    }
};
exports.ContactoRepository = ContactoRepository;
exports.ContactoRepository = ContactoRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ContactoRepository);
//# sourceMappingURL=contacto.repository.js.map