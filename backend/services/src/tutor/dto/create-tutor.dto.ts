import { PickType } from '@nestjs/swagger/dist';
import { BaseTutorDto } from './base-tutor.dto';

export class CreateTutorDto extends PickType(BaseTutorDto, [
  'id',
  'user_id',
  'tutor_rating',
  'tutor_tier',
  'is_verified',
  'created_by',
  'updated_by',
] as const) {}
