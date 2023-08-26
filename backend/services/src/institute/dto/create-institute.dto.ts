import { PickType } from '@nestjs/swagger/dist';
import { BaseInstituteDto } from './base-institute.dto';

export class CreateInstituteDto extends PickType(BaseInstituteDto, [
  'id',
  'name',
  'created_by',
  'updated_by',
] as const) {}
