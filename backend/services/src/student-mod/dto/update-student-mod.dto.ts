import { BaseStudentModDto } from './base-student-mod.dto';
import { PartialType, OmitType } from '@nestjs/swagger';

export class UpdateStudentModDto extends PartialType(
  OmitType(BaseStudentModDto, ['id', 'created_by', 'updated_by'] as const),
) {}
