import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import {  BaseModuleResponseDto } from './dto/base-student-module-response.dto';
import { BaseStudentModuleDto } from './dto/base-student-module.dto';
import {  CreateModuleDto } from './dto/create-student-module.dto';
import { UpdateModuleDto } from './dto/update-student-module.dto';
import { StudentModule } from './student-module.entity';
import { StudentModuleService } from './student-module.service';

@Crud({
  model: {
    type: StudentModule,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    join: {
      studentModule: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseStudentModuleDto,
    create: BaseModuleResponseDto,
    update: BaseModuleResponseDto,
  },
  dto: {
    create: CreateModuleDto,
    update: UpdateModuleDto,
  },
})
@ApiTags('StudentModule')
@Controller('student-module')
export class StudentModuleController implements CrudController<StudentModule> {
  constructor(public service: StudentModuleService) {}
}
