import { PickType } from '@nestjs/swagger';
import { BaseWalletTransactionDto } from './base-wallet-transaction.dto';

export class UpdateWalletTransactionDto extends PickType(
  BaseWalletTransactionDto,
  [
    'id',
    'transaction_id',
    'wallet_id',
    'amount',
    'created_by',
    'updated_by',
  ] as const,
) {}
