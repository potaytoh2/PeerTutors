import { PickType } from '@nestjs/swagger';
import { BaseStudentDto } from './base-institute-admin.dto';

export class UpdateStudentDto extends PickType(BaseStudentDto, [
  'id',
  'user_id',
  'student_rating',
  'created_by',
  'updated_by',
] as const) {}
