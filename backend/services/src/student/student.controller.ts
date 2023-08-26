import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseStudentResponseDto } from './dto/base-student-response.dto';
import { BaseStudentDto } from './dto/base-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student.entity';
import { StudentService } from './student.service';

@Crud({
  model: {
    type: Student,
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
      user: {},
      tutorRequest: {},
      transaction: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseStudentDto,
    create: BaseStudentResponseDto,
    update: BaseStudentResponseDto,
  },
  dto: {
    create: CreateStudentDto,
    update: UpdateStudentDto,
  },
})
@ApiTags('Student')
@Controller('student')
export class StudentController implements CrudController<Student> {
  constructor(public service: StudentService) {}
}
