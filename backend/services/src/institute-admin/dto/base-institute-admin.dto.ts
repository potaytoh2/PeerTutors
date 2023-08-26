import { PickType } from '@nestjs/swagger';
import { InstituteAdmin } from '../institute-admin.entity';

export class BaseInstituteAdmintDto extends PickType(InstituteAdmin, [
  'id',
  'user_id',
  'created_by',
  'updated_by',
] as const) {}
