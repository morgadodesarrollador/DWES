"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnadoService = void 0;
const common_1 = require("@nestjs/common");
let AlumnadoService = class AlumnadoService {
    create(createAlumnadoDto) {
        return 'This action adds a new alumnado';
    }
    findAll() {
        return `This action returns all alumnado`;
    }
    findOne(id) {
        return `This action returns a #${id} alumnado`;
    }
    update(id, updateAlumnadoDto) {
        return `This action updates a #${id} alumnado`;
    }
    remove(id) {
        return `This action removes a #${id} alumnado`;
    }
};
exports.AlumnadoService = AlumnadoService;
exports.AlumnadoService = AlumnadoService = __decorate([
    (0, common_1.Injectable)()
], AlumnadoService);
//# sourceMappingURL=alumnado.service.js.map