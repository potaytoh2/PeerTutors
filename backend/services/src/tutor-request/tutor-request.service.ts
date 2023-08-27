import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { TutorRequest } from './tutor-request.entity';

@Injectable()
export class TutorRequestService extends BaseCrudService<TutorRequest> {
  constructor(@InjectRepository(TutorRequest) repo: Repository<TutorRequest>) {
    super(repo);
  }
}
