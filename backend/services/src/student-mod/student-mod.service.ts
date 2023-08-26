import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { StudentMod } from './student-mod.entity';

@Injectable()
export class StudentModService extends BaseCrudService<StudentMod> {
  constructor(@InjectRepository(StudentMod) repo: Repository<StudentMod>) {
    super(repo);
  }
}
