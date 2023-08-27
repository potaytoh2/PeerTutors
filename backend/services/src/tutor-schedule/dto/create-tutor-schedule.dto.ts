import { PickType } from '@nestjs/swagger/dist';
import { BaseTutorScheduleDto } from './base-tutor-schedule.dto';

export class CreateTutorScheduleDto extends PickType(BaseTutorScheduleDto, [
  'tutor_id',
  'available_date',
  'created_by',
  'updated_by',
] as const) {}
