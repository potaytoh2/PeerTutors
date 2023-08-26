import { PickType } from '@nestjs/swagger';
import { BaseTutorScheduleDto } from './base-tutor-schedule.dto';

export class UpdateTutorScheduleDto extends PickType(BaseTutorScheduleDto, [
  'id',
  'tutor_id',
  'available_date',
  'created_by',
  'updated_by',
] as const) {}
