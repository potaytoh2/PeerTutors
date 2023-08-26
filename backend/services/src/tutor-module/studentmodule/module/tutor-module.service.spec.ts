import { Test, TestingModule } from '@nestjs/testing';
import { TutorModuleService } from './tutor-module.service';

describe('StudentModuleService', () => {
  let service: TutorModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutorModuleService],
    }).compile();

    service = module.get<TutorModuleService>(TutorModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
