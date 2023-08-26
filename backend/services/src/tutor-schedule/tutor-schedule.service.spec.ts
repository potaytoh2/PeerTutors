import { Test, TestingModule } from '@nestjs/testing';
import { TutorScheduleService } from './tutor-schedule.service';

describe('TutorScheduleService', () => {
  let service: TutorScheduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutorScheduleService],
    }).compile();

    service = module.get<TutorScheduleService>(TutorScheduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
