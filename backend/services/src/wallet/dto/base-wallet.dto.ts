import { PickType } from '@nestjs/swagger';
import { Wallet } from '../wallet.entity';

export class BaseWalletDto extends PickType(Wallet, [
  'id',
  'tutor_id',
  'amount',
  'created_by',
  'updated_by',
] as const) {}
