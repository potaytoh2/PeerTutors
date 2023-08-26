import { Test, TestingModule } from '@nestjs/testing';
import { StudentModuleController } from './student-module.controller';

describe('InstituteController', () => {
  let controller: StudentModuleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentModuleController],
    }).compile();

    controller = module.get<StudentModuleController>(StudentModuleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
