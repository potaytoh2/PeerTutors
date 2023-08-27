import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseWalletResponseDto } from './dto/base-wallet-response.dto';
import { BaseWalletDto } from './dto/base-wallet.dto';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { Wallet } from './wallet.entity';
import { WalletService } from './wallet.service';

@Crud({
  model: {
    type: Wallet,
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
      tutor: {},
      walletTransaction: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseWalletDto,
    create: BaseWalletResponseDto,
    update: BaseWalletResponseDto,
  },
  dto: {
    create: CreateWalletDto,
    update: UpdateWalletDto,
  },
})
@ApiTags('Wallet')
@Controller('wallet')
export class WalletController implements CrudController<Wallet> {
  constructor(public service: WalletService) {}
}
