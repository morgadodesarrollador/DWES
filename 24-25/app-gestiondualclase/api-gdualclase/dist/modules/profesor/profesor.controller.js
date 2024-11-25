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
exports.ProfesorController = void 0;
const common_1 = require("@nestjs/common");
const profesor_service_1 = require("./profesor.service");
const create_profesor_dto_1 = require("./dto/create-profesor.dto");
const update_profesor_dto_1 = require("./dto/update-profesor.dto");
let ProfesorController = class ProfesorController {
    constructor(profesorService) {
        this.profesorService = profesorService;
    }
    create(createProfesorDto) {
        return this.profesorService.create(createProfesorDto);
    }
    findAll() {
        return this.profesorService.findAll();
    }
    update(id, updateProfesorDto) {
        return this.profesorService.update(+id, updateProfesorDto);
    }
    remove(id) {
        return this.profesorService.remove(+id);
    }
};
exports.ProfesorController = ProfesorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_profesor_dto_1.CreateProfesorDto]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_profesor_dto_1.UpdateProfesorDto]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfesorController.prototype, "remove", null);
exports.ProfesorController = ProfesorController = __decorate([
    (0, common_1.Controller)('profesor'),
    __metadata("design:paramtypes", [profesor_service_1.ProfesorService])
], ProfesorController);
//# sourceMappingURL=profesor.controller.js.map