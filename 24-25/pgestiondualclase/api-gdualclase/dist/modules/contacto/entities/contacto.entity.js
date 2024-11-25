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
exports.Contacto = void 0;
const empresa_entity_1 = require("../../empresas/entities/empresa.entity");
const seguimiento_entity_1 = require("../../seguimiento/entities/seguimiento.entity");
const typeorm_1 = require("typeorm");
let Contacto = class Contacto {
};
exports.Contacto = Contacto;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Contacto.prototype, "nif", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contacto.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contacto.prototype, "puesto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Contacto.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, unique: true }),
    __metadata("design:type", String)
], Contacto.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.contactos, { eager: false }),
    __metadata("design:type", empresa_entity_1.Empresa)
], Contacto.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => seguimiento_entity_1.Seguimiento, (seguimiento) => seguimiento.contacto),
    __metadata("design:type", seguimiento_entity_1.Seguimiento)
], Contacto.prototype, "seguimientos", void 0);
exports.Contacto = Contacto = __decorate([
    (0, typeorm_1.Entity)('Contacto')
], Contacto);
//# sourceMappingURL=contacto.entity.js.map