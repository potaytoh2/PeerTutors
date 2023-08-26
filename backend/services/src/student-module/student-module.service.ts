import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm/repository/Repository';
import { StudentModule } from './student-module.entity';

@Injectable()
export class  StudentModuleService extends BaseCrudService<StudentModule> {
  constructor(@InjectRepository(StudentModule) repo: Repository<StudentModule>) {
    super(repo);
  }
}
