import { Test, TestingModule } from '@nestjs/testing';
import { TutorScheduleController } from './tutor-schedule.controller';

describe('TutorScheduleController', () => {
  let controller: TutorScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorScheduleController],
    }).compile();

    controller = module.get<TutorScheduleController>(TutorScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
