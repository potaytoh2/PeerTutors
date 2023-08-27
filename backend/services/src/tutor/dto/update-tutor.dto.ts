import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseTutorDto } from './base-tutor.dto';

export class UpdateTutorDto extends PartialType(
  OmitType(BaseTutorDto, ['id', 'created_by', 'updated_by'] as const),
) {}
