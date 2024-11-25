import { Module } from '@nestjs/common';
import { AlumnadoService } from './alumnado.service';
import { AlumnadoController } from './alumnado.controller';

@Module({
  controllers: [AlumnadoController],
  providers: [AlumnadoService],
})
export class AlumnadoModule {}
