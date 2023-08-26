import { PickType } from '@nestjs/swagger';
import { BaseUserDto } from './base-user.dto';

export class UpdateUserDto extends PickType(BaseUserDto, [
  'id',
  'name',
  'email',
  'gender',
  'account_type',
  'institute_id',
  'created_by',
  'updated_by',
] as const) {}
