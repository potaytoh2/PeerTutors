import { PickType } from '@nestjs/swagger';
import { BaseWalletDto } from './base-wallet.dto';

export class UpdateWalletDto extends PickType(BaseWalletDto, [
  'id',
  'tutor_id',
  'amount',
  'created_by',
  'updated_by',
] as const) {}
