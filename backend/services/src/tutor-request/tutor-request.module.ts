import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorRequestController } from './tutor-request.controller';
import { TutorRequest } from './tutor-request.entity';
import { TutorRequestService } from './tutor-request.service';

@Module({
  imports: [TypeOrmModule.forFeature([TutorRequest])],
  controllers: [TutorRequestController],
  providers: [TutorRequestService],
})
export class TutorRequestModule {}
