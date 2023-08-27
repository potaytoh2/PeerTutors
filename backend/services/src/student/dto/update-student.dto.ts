import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseStudentDto } from './base-student.dto';

export class UpdateStudentDto extends PartialType(
  OmitType(BaseStudentDto, ['id', 'created_by', 'updated_by'] as const),
) {}
