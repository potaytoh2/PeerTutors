import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseTransactionResponseDto } from './dto/base-transaction-response.dto';
import { BaseTransactionDto } from './dto/base-transaction.dto';
import { CreateTransactionDto } from './dto/create-transaction-mod.dto';
import { UpdateTransactionDto } from './dto/update-transaction-mod.dto';
import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';
@Crud({
  model: {
    type: Transaction,
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
      module: {},
      student: {},
      tutor: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseTransactionDto,
    create: BaseTransactionResponseDto,
    update: BaseTransactionResponseDto,
  },
  dto: {
    create: CreateTransactionDto,
    update: UpdateTransactionDto,
  },
})
@ApiTags('Transaction')
@Controller('transaction')
export class TransactionController implements CrudController<Transaction> {
  constructor(public service: TransactionService) {}
}
