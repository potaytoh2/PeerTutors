import { PickType } from '@nestjs/swagger';

import { TutorModule } from '../student-module.entity';

export class BaseTutorModuleDto extends PickType(StudentModule, [
  'id',
  'student_id',
  'module_id',
  'updated_by',
  'created_by'
] as const) {}
