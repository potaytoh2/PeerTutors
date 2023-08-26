import { PickType } from '@nestjs/swagger';
import { TutorRequest } from '../tutor-request.entity';

export class BaseTutorRequestDto extends PickType(TutorRequest, [
  'id',
  'tutor_id',
  'date',
  'module_id',
  'student_id',
  'isAccepted',
  'created_by',
  'updated_by',
] as const) {}
