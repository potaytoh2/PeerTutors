import { PickType } from '@nestjs/swagger/dist';
import { BaseInstituteAdmintDto } from './base-institute-admin.dto';

export class CreateInstituteAdminDto extends PickType(BaseInstituteAdmintDto, [
  'id',
  'user_id',
  'created_by',
  'updated_by',
] as const) {}
