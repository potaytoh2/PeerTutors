import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorScheduleController } from './tutor-schedule.controller';
import { TutorSchedule } from './tutor-schedule.entity';
import { TutorScheduleService } from './tutor-schedule.service';

@Module({
    imports: [TypeOrmModule.forFeature([TutorSchedule])],
    controllers: [TutorScheduleController],
    providers: [TutorScheduleService],
  })
  export class TutorScheduleModule {}
  