import { PickType } from '@nestjs/swagger/dist';
import { BaseModuleDto } from './base-module.dto';

export class CreateModuleDto extends PickType(BaseModuleDto, [
  'id',
  'module_code',
  'name',
  'base_pay',
  'updated_by',
  'created_by'
] as const) {}
