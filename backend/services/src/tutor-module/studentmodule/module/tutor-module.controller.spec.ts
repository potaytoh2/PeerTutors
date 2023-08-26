import { Test, TestingModule } from '@nestjs/testing';
import { TutorModuleController } from './tutor-module.controller';

describe('InstituteController', () => {
  let controller: TutorModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorModuleController],
    }).compile();

    controller = module.get<TutorModuleController>(TutorModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
