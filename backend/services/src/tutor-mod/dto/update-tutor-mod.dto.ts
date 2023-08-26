import { PickType } from '@nestjs/swagger';
import { BaseTutorModDto } from './base-tutor-mod.dto';

export class UpdateTutorModDto extends PickType(BaseTutorModDto, [
  'id',
  'tutor_id',
  'module_id',
  'created_by',
  'updated_by',
] as const) {}
