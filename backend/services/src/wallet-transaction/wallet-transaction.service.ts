import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { WalletTransaction } from './wallet-transaction.entity';

@Injectable()
export class WalletTransactionService extends BaseCrudService<WalletTransaction> {
  constructor(
    @InjectRepository(WalletTransaction) repo: Repository<WalletTransaction>,
  ) {
    super(repo);
  }
}
