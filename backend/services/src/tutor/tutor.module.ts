import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorController } from './tutor.controller';
import { Tutor } from './tutor.entity';
import { TutorService } from './tutor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tutor])],
  controllers: [TutorController],
  providers: [TutorService],
})
export class TutorModule {}
