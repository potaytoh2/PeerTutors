import { OmitType, PartialType } from '@nestjs/swagger';
import { BaseWalletTransactionDto } from './base-wallet-transaction.dto';

export class UpdateWalletTransactionDto extends PartialType(
  OmitType(BaseWalletTransactionDto, [
    'id',
    'created_by',
    'updated_by',
  ] as const),
) {}
