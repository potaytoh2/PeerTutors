import { PickType } from '@nestjs/swagger/dist';
import { BaseStudentModDto } from './base-student-mod.dto';

export class CreateStudentModDto extends PickType(BaseStudentModDto, [
  'student_id',
  'module_id',
  'created_by',
  'updated_by',
] as const) {}
