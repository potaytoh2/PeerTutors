import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseUserDto } from './base-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(BaseUserDto, ['id', 'created_by', 'updated_by'] as const),
) {}
