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
exports.ContactoController = void 0;
const common_1 = require("@nestjs/common");
const contacto_service_1 = require("./contacto.service");
const create_contacto_dto_1 = require("./dto/create-contacto.dto");
const update_contacto_dto_1 = require("./dto/update-contacto.dto");
let ContactoController = class ContactoController {
    constructor(contactoService) {
        this.contactoService = contactoService;
    }
    create(createContactoDto) {
        console.log(createContactoDto);
        return this.contactoService.create(createContactoDto);
    }
    findAll() {
        return this.contactoService.findAll();
    }
    getContactos() {
        return this.contactoService.getContactos();
    }
    findOne(nif) {
        return this.contactoService.findOne(nif);
    }
    update(nif, updateContactoDto) {
        return this.contactoService.update(nif, updateContactoDto);
    }
    remove(nif) {
        return this.contactoService.remove(nif);
    }
};
exports.ContactoController = ContactoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contacto_dto_1.CreateContactoDto]),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('seguimiento'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "getContactos", null);
__decorate([
    (0, common_1.Get)(':nif'),
    __param(0, (0, common_1.Param)('nif')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':nif'),
    __param(0, (0, common_1.Param)('nif')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contacto_dto_1.UpdateContactoDto]),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':nif'),
    __param(0, (0, common_1.Param)('nif')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContactoController.prototype, "remove", null);
exports.ContactoController = ContactoController = __decorate([
    (0, common_1.Controller)('contacto'),
    __metadata("design:paramtypes", [contacto_service_1.ContactoService])
], ContactoController);
//# sourceMappingURL=contacto.controller.js.map