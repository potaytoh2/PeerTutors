import { Test, TestingModule } from '@nestjs/testing';
import { TutorRequestController } from './tutor-request.controller';

describe('TutorRequestController', () => {
  let controller: TutorRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorRequestController],
    }).compile();

    controller = module.get<TutorRequestController>(TutorRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
