import { PickType } from '@nestjs/swagger/dist';
import { BaseTransactionDto } from './base-transaction.dto';

export class CreateTransactionDto extends PickType(BaseTransactionDto, [
  'student_id',
  'module_id',
  'tutor_id',
  'amount',
  'isVerified',
  'verification_comments',
  'created_by',
  'updated_by',
] as const) {}
