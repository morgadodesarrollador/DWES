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
exports.SeguimientoController = void 0;
const common_1 = require("@nestjs/common");
const seguimiento_service_1 = require("./seguimiento.service");
const create_seguimiento_dto_1 = require("./dto/create-seguimiento.dto");
const update_seguimiento_dto_1 = require("./dto/update-seguimiento.dto");
let SeguimientoController = class SeguimientoController {
    constructor(seguimientoService) {
        this.seguimientoService = seguimientoService;
    }
    create(createSeguimientoDto) {
        return this.seguimientoService.create(createSeguimientoDto);
    }
    findAll() {
        return this.seguimientoService.findAll();
    }
    findOne(segId) {
        return this.seguimientoService.findOne(segId);
    }
    update(id, updateSeguimientoDto) {
        return this.seguimientoService.update(+id, updateSeguimientoDto);
    }
    remove(id) {
        return this.seguimientoService.remove(+id);
    }
};
exports.SeguimientoController = SeguimientoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seguimiento_dto_1.CreateSeguimientoDto]),
    __metadata("design:returntype", void 0)
], SeguimientoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeguimientoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':segId'),
    __param(0, (0, common_1.Param)('segId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SeguimientoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_seguimiento_dto_1.UpdateSeguimientoDto]),
    __metadata("design:returntype", void 0)
], SeguimientoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeguimientoController.prototype, "remove", null);
exports.SeguimientoController = SeguimientoController = __decorate([
    (0, common_1.Controller)('seguimiento'),
    __metadata("design:paramtypes", [seguimiento_service_1.SeguimientoService])
], SeguimientoController);
//# sourceMappingURL=seguimiento.controller.js.map