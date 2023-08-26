import { PickType } from '@nestjs/swagger';
import { BaseModuleDto } from './base-module.dto';

export class UpdateModuleDto extends PickType(BaseModuleDto, [
  'id',
  'module_code',
  'name',
  'base_pay',
  'updated_by',
  'created_by'
] as const) {}
