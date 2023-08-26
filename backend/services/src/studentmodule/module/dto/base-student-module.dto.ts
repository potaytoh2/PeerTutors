import { PickType } from '@nestjs/swagger';

import { StudentModule } from '../student-module.entity';

export class BaseStudentModuleDto extends PickType(StudentModule, [
  'id',
  'student_id',
  'module_id',
  'updated_by',
  'created_by'
] as const) {}
