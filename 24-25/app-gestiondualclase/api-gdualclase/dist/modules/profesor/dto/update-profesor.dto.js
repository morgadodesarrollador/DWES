"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfesorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_profesor_dto_1 = require("./create-profesor.dto");
class UpdateProfesorDto extends (0, mapped_types_1.PartialType)(create_profesor_dto_1.CreateProfesorDto) {
}
exports.UpdateProfesorDto = UpdateProfesorDto;
//# sourceMappingURL=update-profesor.dto.js.map