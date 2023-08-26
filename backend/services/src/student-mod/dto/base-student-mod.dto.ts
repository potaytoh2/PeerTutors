import { PickType } from '@nestjs/swagger';
import { StudentMod } from '../student-mod.entity';

export class BaseStudentModDto extends PickType(StudentMod, [
  'id',
  'student_id',
  'module_id',
  'created_by',
  'updated_by',
] as const) {}
