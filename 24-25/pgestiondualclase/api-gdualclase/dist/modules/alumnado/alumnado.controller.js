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
exports.AlumnadoController = void 0;
const common_1 = require("@nestjs/common");
const alumnado_service_1 = require("./alumnado.service");
const create_alumnado_dto_1 = require("./dto/create-alumnado.dto");
const update_alumnado_dto_1 = require("./dto/update-alumnado.dto");
let AlumnadoController = class AlumnadoController {
    constructor(alumnadoService) {
        this.alumnadoService = alumnadoService;
    }
    create(createAlumnadoDto) {
        return this.alumnadoService.create(createAlumnadoDto);
    }
    findAll() {
        return this.alumnadoService.findAll();
    }
    findOne(id) {
        return this.alumnadoService.findOne(+id);
    }
    update(id, updateAlumnadoDto) {
        return this.alumnadoService.update(+id, updateAlumnadoDto);
    }
    remove(id) {
        return this.alumnadoService.remove(+id);
    }
};
exports.AlumnadoController = AlumnadoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alumnado_dto_1.CreateAlumnadoDto]),
    __metadata("design:returntype", void 0)
], AlumnadoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlumnadoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlumnadoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_alumnado_dto_1.UpdateAlumnadoDto]),
    __metadata("design:returntype", void 0)
], AlumnadoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlumnadoController.prototype, "remove", null);
exports.AlumnadoController = AlumnadoController = __decorate([
    (0, common_1.Controller)('alumnado'),
    __metadata("design:paramtypes", [alumnado_service_1.AlumnadoService])
], AlumnadoController);
//# sourceMappingURL=alumnado.controller.js.map