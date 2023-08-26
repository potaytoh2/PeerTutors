import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionService extends BaseCrudService<Transaction> {
  constructor(@InjectRepository(Transaction) repo: Repository<Transaction>) {
    super(repo);
  }
}
