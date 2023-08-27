import { Test, TestingModule } from '@nestjs/testing';
import { StudentModService } from './student-mod.service';

describe('StudentModService', () => {
  let service: StudentModService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentModService],
    }).compile();

    service = module.get<StudentModService>(StudentModService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
