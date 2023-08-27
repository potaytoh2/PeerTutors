import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseWalletTransactionResponseDto } from './dto/base-wallet-transaction-response.dto';
import { BaseWalletTransactionDto } from './dto/base-wallet-transaction.dto';
import { CreateWalletTransactionDto } from './dto/create-wallet-transaction.dto';
import { UpdateWalletTransactionDto } from './dto/update-wallet-transaction.dto';
import { WalletTransaction } from './wallet-transaction.entity';
import { WalletTransactionService } from './wallet-transaction.service';

@Crud({
  model: {
    type: WalletTransaction,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    join: {
      wallet: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseWalletTransactionDto,
    create: BaseWalletTransactionResponseDto,
    update: BaseWalletTransactionResponseDto,
  },
  dto: {
    create: CreateWalletTransactionDto,
    update: UpdateWalletTransactionDto,
  },
})
@ApiTags('WalletTransaction')
@Controller('wallet-transaction')
export class WalletTransactionController
  implements CrudController<WalletTransaction>
{
  constructor(public service: WalletTransactionService) {}
}
