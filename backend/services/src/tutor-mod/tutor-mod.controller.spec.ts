import { Test, TestingModule } from '@nestjs/testing';
import { TutorModController } from './tutor-mod.controller';

describe('TutorModController', () => {
  let controller: TutorModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorModController],
    }).compile();

    controller = module.get<TutorModController>(TutorModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
