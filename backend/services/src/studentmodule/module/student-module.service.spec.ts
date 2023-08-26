import { Test, TestingModule } from '@nestjs/testing';
import { StudentModuleService } from './student-module.service';

describe('StudentModuleService', () => {
  let service: StudentModuleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentModuleService],
    }).compile();

    service = module.get<StudentModuleService>(StudentModuleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
