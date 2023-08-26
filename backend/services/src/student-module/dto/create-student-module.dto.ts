import { PickType } from '@nestjs/swagger/dist';
import { BaseStudentModuleDto } from './base-student-module.dto';

export class CreateModuleDto extends PickType(BaseStudentModuleDto, [
  'id',
  'student_id',
  'module_id',
  'updated_by',
  'created_by'
] as const) {}
