import { PickType } from '@nestjs/swagger';
import { BaseTransactionDto } from './base-transaction.dto';

export class UpdateTransactionDto extends PickType(BaseTransactionDto, [
  'id',
  'student_id',
  'module_id',
  'tutor_id',
  'amount',
  'isVerified',
  'verification_comments',
  'created_by',
  'updated_by',
] as const) {}
