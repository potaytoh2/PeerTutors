import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseInstituteAdmintDto } from './base-institute-admin.dto';

export class UpdateInstituteAdminDto extends PartialType(
  OmitType(BaseInstituteAdmintDto, ['id', 'created_by', 'updated_by'] as const),
) {}
