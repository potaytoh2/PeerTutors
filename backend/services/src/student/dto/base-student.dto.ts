import { PickType } from '@nestjs/swagger';
import { Student } from '../student.entity';


export class BaseStudentDto extends PickType(Student, [
  'id',
  'user_id',
  'student_rating',
  'created_by',
  'updated_by'
] as const) {}
