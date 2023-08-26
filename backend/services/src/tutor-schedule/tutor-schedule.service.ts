import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { TutorSchedule } from './tutor-schedule.entity';

@Injectable()
export class TutorScheduleService extends BaseCrudService<TutorSchedule> {
  constructor(
    @InjectRepository(TutorSchedule) repo: Repository<TutorSchedule>,
  ) {
    super(repo);
  }
}
