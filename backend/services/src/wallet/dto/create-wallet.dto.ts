import { PickType } from '@nestjs/swagger/dist';
import { BaseWalletDto } from './base-wallet.dto';

export class CreateWalletDto extends PickType(BaseWalletDto, [
  'id',
  'tutor_id',
  'amount',
  'created_by',
  'updated_by',
] as const) {}
