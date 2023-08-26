import { Test, TestingModule } from '@nestjs/testing';
import { TutorModService } from './tutor-mod.service';

describe('TutorModService', () => {
  let service: TutorModService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutorModService],
    }).compile();

    service = module.get<TutorModService>(TutorModService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
