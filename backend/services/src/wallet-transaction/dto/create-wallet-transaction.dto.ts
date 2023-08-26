import { PickType } from '@nestjs/swagger/dist';
import { BaseWalletTransactionDto } from './base-wallet-transaction.dto';

export class CreateWalletTransactionDto extends PickType(
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
