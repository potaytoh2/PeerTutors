import { PickType } from '@nestjs/swagger';
import { BaseStudentModDto } from './base-student-mod.dto';

export class UpdateStudentModDto extends PickType(BaseStudentModDto, [
  'id',
  'student_id',
  'module_id',
  'created_by',
  'updated_by',
] as const) {}
