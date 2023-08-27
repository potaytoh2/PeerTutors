import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService extends BaseCrudService<Student> {
  constructor(@InjectRepository(Student) repo: Repository<Student>) {
    super(repo);
  }
}
