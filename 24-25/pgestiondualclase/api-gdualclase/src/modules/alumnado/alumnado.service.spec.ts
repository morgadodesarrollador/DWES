import { Test, TestingModule } from '@nestjs/testing';
import { AlumnadoService } from './alumnado.service';

describe('AlumnadoService', () => {
  let service: AlumnadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlumnadoService],
    }).compile();

    service = module.get<AlumnadoService>(AlumnadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
