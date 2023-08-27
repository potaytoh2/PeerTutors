import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm/repository/Repository';
import { ModuleEntity } from './module.entity';

@Injectable()
export class  ModuleService extends BaseCrudService<ModuleEntity> {
  constructor(@InjectRepository(ModuleEntity) repo: Repository<ModuleEntity>) {
    super(repo);
  }
}
