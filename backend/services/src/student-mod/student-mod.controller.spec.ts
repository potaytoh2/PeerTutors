import { Test, TestingModule } from '@nestjs/testing';
import { StudentModController } from './student-mod.controller';

describe('StudentModController', () => {
  let controller: StudentModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentModController],
    }).compile();

    controller = module.get<StudentModController>(StudentModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
