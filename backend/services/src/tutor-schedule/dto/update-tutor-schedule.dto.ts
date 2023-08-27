import { OmitType, PartialType } from '@nestjs/swagger';
import { BaseTutorScheduleDto } from './base-tutor-schedule.dto';

export class UpdateTutorScheduleDto extends PartialType(
  OmitType(BaseTutorScheduleDto, ['id', 'created_by', 'updated_by'] as const),
) {}
