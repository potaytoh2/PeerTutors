import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { Tutor } from './tutor.entity';

@Injectable()
export class TutorService extends BaseCrudService<Tutor> {
  constructor(@InjectRepository(Tutor) repo: Repository<Tutor>) {
    super(repo);
  }
}
