import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm/repository/Repository';
import { Wallet } from './wallet.entity';

@Injectable()
export class WalletService extends BaseCrudService<Wallet> {
  constructor(@InjectRepository(Wallet) repo: Repository<Wallet>) {
    super(repo);
  }
}
