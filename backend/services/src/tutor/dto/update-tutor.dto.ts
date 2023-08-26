import { PickType } from '@nestjs/swagger';
import { BaseTutorDto } from './base-tutor.dto';

export class UpdateTutorDto extends PickType(BaseTutorDto, [
  'id',
  'user_id',
  'tutor_rating',
  'tutor_tier',
  'is_verified',
  'created_by',
  'updated_by',
] as const) {}
