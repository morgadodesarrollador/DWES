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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const seedEmpresas = require("../seed/data/empresas.json");
const seedContactos = require("../seed/data/contactos.json");
const seedProfesores = require("../seed/data/profesor.json");
const seedSeguimientos = require("../seed/data/seguimiento.json");
const empresas_service_1 = require("../empresas/empresas.service");
const contacto_service_1 = require("../contacto/contacto.service");
const profesor_service_1 = require("../profesor/profesor.service");
const seguimiento_service_1 = require("../seguimiento/seguimiento.service");
let SeedService = class SeedService {
    constructor(empresasService, constactoService, profesoreService, seguiientoService) {
        this.empresasService = empresasService;
        this.constactoService = constactoService;
        this.profesoreService = profesoreService;
        this.seguiientoService = seguiientoService;
    }
    async loadData() {
        await this.loadEmpresas();
    }
    async loadSeguimientos() {
        await this.seguiientoService.deleteAllSeguimientos();
        const insertPromisesSeguimientos = [];
        seedSeguimientos.forEach(async (seguimiento) => {
            insertPromisesSeguimientos.push(this.seguiientoService.create(seguimiento));
            console.log(seguimiento);
        });
        const result = await Promise.all(insertPromisesSeguimientos);
        return result;
    }
    async loadEmpresas() {
        await this.empresasService.deleteAllEmpresas();
        const insertPromisesEmpresas = [];
        seedEmpresas.forEach(async (empresa) => {
            console.log(empresa);
            insertPromisesEmpresas.push(this.empresasService.create(empresa));
        });
        const result = await Promise.all(insertPromisesEmpresas);
        return result;
    }
    async loadContactos() {
        await this.constactoService.deleteAllContactos();
        const insertPromisesContatos = [];
        seedContactos.forEach(async (contacto) => {
            insertPromisesContatos.push(this.constactoService.create(contacto));
        });
        const result = await Promise.all(insertPromisesContatos);
        return result;
    }
    async loadProfesores() {
        await this.profesoreService.deleteAllProfesores();
        const insertPromisesProfesores = [];
        seedProfesores.forEach(async (profesor) => {
            insertPromisesProfesores.push(this.profesoreService.create(profesor));
        });
        const result = await Promise.all(insertPromisesProfesores);
        return result;
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [empresas_service_1.EmpresasService,
        contacto_service_1.ContactoService,
        profesor_service_1.ProfesorService,
        seguimiento_service_1.SeguimientoService])
], SeedService);
//# sourceMappingURL=seed.service.js.map