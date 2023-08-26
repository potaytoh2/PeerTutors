import { PickType } from '@nestjs/swagger/dist';
import { BaseTutorScheduleDto } from './base-tutor-module.dto';

export class CreateTutorModuleDto extends PickType(BaseTutorScheduleDto, [
  'id',
  'available_date',
  'tutor_id',
  'updated_by',
  'created_by'
] as const) {}
