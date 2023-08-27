import { PickType } from '@nestjs/swagger/dist';
import { BaseWalletDto } from './base-wallet.dto';

export class CreateWalletDto extends PickType(BaseWalletDto, [
  'tutor_id',
  'amount',
  'created_by',
  'updated_by',
] as const) {}
