import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm/repository/Repository';
import { Institute } from './institute.entity';

@Injectable()
export class InstituteService extends BaseCrudService<Institute> {
  constructor(@InjectRepository(Institute) repo: Repository<Institute>) {
    super(repo);
  }
}
