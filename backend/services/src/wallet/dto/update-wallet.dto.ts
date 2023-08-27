import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseWalletDto } from './base-wallet.dto';

export class UpdateWalletDto extends PartialType(
  OmitType(BaseWalletDto, ['id', 'created_by', 'updated_by'] as const),
) {}
