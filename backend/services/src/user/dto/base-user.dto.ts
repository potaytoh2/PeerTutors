import { PickType } from '@nestjs/swagger';
import { User } from '../user.entity';

export class BaseUserDto extends PickType(User, [
  'id',
  'name',
  'email',
  'gender',
  'account_type',
  'institute_id',
  'created_by',
  'updated_by',
] as const) {}
