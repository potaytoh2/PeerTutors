import { PickType } from '@nestjs/swagger';
import { BaseInstituteDto } from './base-institute.dto';

export class UpdateInstituteDto extends PickType(BaseInstituteDto, [
  'id',
  'name',
  'created_by',
  'updated_by',
] as const) {}
