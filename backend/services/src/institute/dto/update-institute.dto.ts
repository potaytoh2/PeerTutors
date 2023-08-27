import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseInstituteDto } from './base-institute.dto';

export class UpdateInstituteDto extends PartialType(
  OmitType(BaseInstituteDto, ['id', 'created_by', 'updated_by'] as const),
) {}
