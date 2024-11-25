"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnadoModule = void 0;
const common_1 = require("@nestjs/common");
const alumnado_service_1 = require("./alumnado.service");
const alumnado_controller_1 = require("./alumnado.controller");
let AlumnadoModule = class AlumnadoModule {
};
exports.AlumnadoModule = AlumnadoModule;
exports.AlumnadoModule = AlumnadoModule = __decorate([
    (0, common_1.Module)({
        controllers: [alumnado_controller_1.AlumnadoController],
        providers: [alumnado_service_1.AlumnadoService],
    })
], AlumnadoModule);
//# sourceMappingURL=alumnado.module.js.map