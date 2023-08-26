import { PickType } from '@nestjs/swagger';
import { BaseTutorScheduleDto } from './base-tutor-module.dto';

export class UpdateTutorModuleDto extends PickType(BaseTutorScheduleDto, [
  'id',
  'available_date',
  'tutor_id',
  'updated_by',
  'created_by'
] as const) {}
