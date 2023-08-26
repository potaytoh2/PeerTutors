import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm/repository/Repository';
import { TutorModule } from './tutor-module.entity';

@Injectable()
export class  TutorModuleService extends BaseCrudService<TutorModule> {
  constructor(@InjectRepository(TutorModule) repo: Repository<TutorModule>) {
    super(repo);
  }
}
