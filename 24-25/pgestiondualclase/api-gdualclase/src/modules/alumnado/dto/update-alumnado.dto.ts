import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnadoDto } from './create-alumnado.dto';

export class UpdateAlumnadoDto extends PartialType(CreateAlumnadoDto) {}
