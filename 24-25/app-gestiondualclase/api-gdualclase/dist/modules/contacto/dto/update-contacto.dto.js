"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContactoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_contacto_dto_1 = require("./create-contacto.dto");
class UpdateContactoDto extends (0, mapped_types_1.PartialType)(create_contacto_dto_1.CreateContactoDto) {
}
exports.UpdateContactoDto = UpdateContactoDto;
//# sourceMappingURL=update-contacto.dto.js.map