import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseStudentModResponseDto } from './dto/base-student-mod-response.dto';
import { BaseStudentModDto } from './dto/base-student-mod.dto';
import { CreateStudentModDto } from './dto/create-student-mod.dto';
import { UpdateStudentModDto } from './dto/update-student-mod.dto';
import { StudentMod } from './student-mod.entity';
import { StudentModService } from './student-mod.service';

@Crud({
  model: {
    type: StudentMod,
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
      module: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseStudentModDto,
    create: BaseStudentModResponseDto,
    update: BaseStudentModResponseDto,
  },
  dto: {
    create: CreateStudentModDto,
    update: UpdateStudentModDto,
  },
})
@ApiTags('StudentMod')
@Controller('student-mod')
export class StudentModController implements CrudController<StudentMod> {
  constructor(public service: StudentModService) {}
}
