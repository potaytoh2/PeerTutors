import { PickType } from '@nestjs/swagger';
import { Tutor } from '../tutor.entity';

export class BaseTutorDto extends PickType(Tutor, [
  'id',
  'user_id',
  'tutor_rating',
  'tutor_tier',
  'is_verified',
  'created_by',
  'updated_by',
] as const) {}
