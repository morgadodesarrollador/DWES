import { Test, TestingModule } from '@nestjs/testing';
import { AlumnadoController } from './alumnado.controller';
import { AlumnadoService } from './alumnado.service';

describe('AlumnadoController', () => {
  let controller: AlumnadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlumnadoController],
      providers: [AlumnadoService],
    }).compile();

    controller = module.get<AlumnadoController>(AlumnadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
