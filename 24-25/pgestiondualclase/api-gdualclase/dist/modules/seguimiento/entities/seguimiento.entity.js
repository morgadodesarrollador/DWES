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
exports.Seguimiento = void 0;
const contacto_entity_1 = require("../../contacto/entities/contacto.entity");
const typeorm_1 = require("typeorm");
const empresa_entity_1 = require("../../empresas/entities/empresa.entity");
const profesor_entity_1 = require("../../profesor/entities/profesor.entity");
let Seguimiento = class Seguimiento {
};
exports.Seguimiento = Seguimiento;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Seguimiento.prototype, "segId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seguimiento.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seguimiento.prototype, "tipo_contacto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seguimiento.prototype, "notas", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Seguimiento.prototype, "acuerdos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => empresa_entity_1.Empresa, (empresa) => empresa.seguimientos, { cascade: true, eager: true }),
    __metadata("design:type", empresa_entity_1.Empresa)
], Seguimiento.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.Profesor, (profesor) => profesor.seguimientos, { cascade: true, eager: true }),
    __metadata("design:type", profesor_entity_1.Profesor)
], Seguimiento.prototype, "profesor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contacto_entity_1.Contacto, (contacto) => contacto.seguimientos, { cascade: true, eager: true }),
    __metadata("design:type", contacto_entity_1.Contacto)
], Seguimiento.prototype, "contacto", void 0);
exports.Seguimiento = Seguimiento = __decorate([
    (0, typeorm_1.Entity)('Seguimiento')
], Seguimiento);
//# sourceMappingURL=seguimiento.entity.js.map