import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseModuleDto } from './base-module.dto';

export class UpdateModuleDto extends PartialType(
  OmitType(BaseModuleDto, ['id', 'created_by', 'updated_by'] as const),
) {}
