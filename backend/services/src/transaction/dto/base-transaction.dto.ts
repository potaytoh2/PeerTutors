import { PickType } from '@nestjs/swagger';
import { Transaction } from '../transaction.entity';

export class BaseTransactionDto extends PickType(Transaction, [
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
