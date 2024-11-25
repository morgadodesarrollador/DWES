"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAlumnadoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_alumnado_dto_1 = require("./create-alumnado.dto");
class UpdateAlumnadoDto extends (0, mapped_types_1.PartialType)(create_alumnado_dto_1.CreateAlumnadoDto) {
}
exports.UpdateAlumnadoDto = UpdateAlumnadoDto;
//# sourceMappingURL=update-alumnado.dto.js.map