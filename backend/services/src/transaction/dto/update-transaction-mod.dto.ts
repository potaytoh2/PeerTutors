import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseTransactionDto } from './base-transaction.dto';

export class UpdateTransactionDto extends PartialType(
  OmitType(BaseTransactionDto, [
    'id',
    'created_by',
    'updated_by',
  ] as const),
) {}
