import { PickType } from '@nestjs/swagger';
import { WalletTransaction } from '../wallet-transaction.entity';

export class BaseWalletTransactionDto extends PickType(WalletTransaction, [
  'id',
  'transaction_id',
  'wallet_id',
  'amount',
  'created_by',
  'updated_by',
] as const) {}
