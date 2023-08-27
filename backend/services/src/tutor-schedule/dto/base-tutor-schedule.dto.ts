import { PickType } from '@nestjs/swagger';
import { TutorSchedule } from '../tutor-schedule.entity';

export class BaseTutorScheduleDto extends PickType(TutorSchedule, [
  'id',
  'tutor_id',
  'available_date',
  'created_by',
  'updated_by',
] as const) {}
