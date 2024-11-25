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
exports.EmpresasController = void 0;
const common_1 = require("@nestjs/common");
const empresas_service_1 = require("./empresas.service");
const create_empresa_dto_1 = require("./dto/create-empresa.dto");
const update_empresa_dto_1 = require("./dto/update-empresa.dto");
let EmpresasController = class EmpresasController {
    constructor(empresasService) {
        this.empresasService = empresasService;
    }
    create(createEmpresaDto) {
        return this.empresasService.create(createEmpresaDto);
    }
    findAll() {
        return this.empresasService.findAll();
    }
    findOne(cif) {
        return this.empresasService.findOne(cif);
    }
    update(id, updateEmpresaDto) {
        return this.empresasService.update(+id, updateEmpresaDto);
    }
    remove(id) {
        return this.empresasService.remove(+id);
    }
    getContactos(cif) {
        return this.empresasService.getContactos(cif);
    }
};
exports.EmpresasController = EmpresasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_empresa_dto_1.CreateEmpresaDto]),
    __metadata("design:returntype", void 0)
], EmpresasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpresasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':cif'),
    __param(0, (0, common_1.Param)('cif')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpresasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_empresa_dto_1.UpdateEmpresaDto]),
    __metadata("design:returntype", void 0)
], EmpresasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpresasController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('/contactos/:cif'),
    __param(0, (0, common_1.Param)('cif')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpresasController.prototype, "getContactos", null);
exports.EmpresasController = EmpresasController = __decorate([
    (0, common_1.Controller)('empresas'),
    __metadata("design:paramtypes", [empresas_service_1.EmpresasService])
], EmpresasController);
//# sourceMappingURL=empresas.controller.js.map