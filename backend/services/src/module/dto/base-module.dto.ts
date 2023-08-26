import { PickType } from '@nestjs/swagger';

import { ModuleEntity } from '../module.entity';

export class BaseModuleDto extends PickType(ModuleEntity, [
  'id',
  'module_code',
  'name',
  'base_pay',
  'updated_by',
  'created_by'
] as const) {}
