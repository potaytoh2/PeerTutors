import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { TutorMod } from './tutor-mod.entity';

@Injectable()
export class TutorModService extends BaseCrudService<TutorMod> {
  constructor(@InjectRepository(TutorMod) repo: Repository<TutorMod>) {
    super(repo);
  }
}
