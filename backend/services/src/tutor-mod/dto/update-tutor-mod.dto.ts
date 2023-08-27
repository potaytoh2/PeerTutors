import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseTutorModDto } from './base-tutor-mod.dto';

export class UpdateTutorModDto extends PartialType(
  OmitType(BaseTutorModDto, ['id', 'created_by', 'updated_by'] as const),
) {}
