"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactoModule = void 0;
const common_1 = require("@nestjs/common");
const contacto_service_1 = require("./contacto.service");
const contacto_controller_1 = require("./contacto.controller");
const typeorm_1 = require("@nestjs/typeorm");
const contacto_entity_1 = require("./entities/contacto.entity");
const empresas_module_1 = require("../empresas/empresas.module");
const contacto_repository_1 = require("./entities/contacto.repository");
let ContactoModule = class ContactoModule {
};
exports.ContactoModule = ContactoModule;
exports.ContactoModule = ContactoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => empresas_module_1.EmpresasModule),
            typeorm_1.TypeOrmModule.forFeature([contacto_entity_1.Contacto, contacto_repository_1.ContactoRepository]),
        ],
        controllers: [contacto_controller_1.ContactoController],
        providers: [contacto_repository_1.ContactoRepository, contacto_service_1.ContactoService],
        exports: [contacto_service_1.ContactoService, typeorm_1.TypeOrmModule]
    })
], ContactoModule);
//# sourceMappingURL=contacto.module.js.map