import { PickType } from '@nestjs/swagger';
import { BaseInstituteAdmintDto } from './base-institute-admin.dto';

export class UpdateInstituteAdminDto extends PickType(BaseInstituteAdmintDto, [
  'id',
  'user_id',
  'created_by',
  'updated_by',
] as const) {}
