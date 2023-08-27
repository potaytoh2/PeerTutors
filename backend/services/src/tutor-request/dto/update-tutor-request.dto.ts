import { OmitType, PartialType } from '@nestjs/swagger';
import { BaseTutorRequestDto } from './base-tutor-request.dto';

export class UpdateTutorRequestDto extends PartialType(
  OmitType(BaseTutorRequestDto, ['id', 'created_by', 'updated_by'] as const),
) {}
