import { PickType } from '@nestjs/swagger/dist';
import { BaseStudentDto } from './base-student.dto';

export class CreateStudentDto extends PickType(BaseStudentDto, [
  'user_id',
  'student_rating',
  'created_by',
  'updated_by',
] as const) {}
