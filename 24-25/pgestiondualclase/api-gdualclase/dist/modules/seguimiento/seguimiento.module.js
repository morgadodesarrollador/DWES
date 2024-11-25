"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguimientoModule = void 0;
const common_1 = require("@nestjs/common");
const seguimiento_service_1 = require("./seguimiento.service");
const seguimiento_controller_1 = require("./seguimiento.controller");
const typeorm_1 = require("@nestjs/typeorm");
const seguimiento_entity_1 = require("./entities/seguimiento.entity");
const empresas_module_1 = require("../empresas/empresas.module");
const profesor_module_1 = require("../profesor/profesor.module");
const contacto_module_1 = require("../contacto/contacto.module");
let SeguimientoModule = class SeguimientoModule {
};
exports.SeguimientoModule = SeguimientoModule;
exports.SeguimientoModule = SeguimientoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            empresas_module_1.EmpresasModule, profesor_module_1.ProfesorModule, contacto_module_1.ContactoModule,
            typeorm_1.TypeOrmModule.forFeature([seguimiento_entity_1.Seguimiento]),
        ],
        controllers: [seguimiento_controller_1.SeguimientoController],
        providers: [seguimiento_service_1.SeguimientoService],
        exports: [seguimiento_service_1.SeguimientoService]
    })
], SeguimientoModule);
//# sourceMappingURL=seguimiento.module.js.map