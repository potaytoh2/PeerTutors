import { PickType } from '@nestjs/swagger/dist';
import { BaseTutorModDto } from './base-tutor-mod.dto';

export class CreateTutorModDto extends PickType(BaseTutorModDto, [
  'tutor_id',
  'module_id',
  'created_by',
  'updated_by',
] as const) {}
