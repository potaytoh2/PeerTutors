import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorModController } from './tutor-mod.controller';
import { TutorMod } from './tutor-mod.entity';
import { TutorModService } from './tutor-mod.service';

@Module({
  imports: [TypeOrmModule.forFeature([TutorMod])],
  controllers: [TutorModController],
  providers: [TutorModService]
})
export class TutorModModule {}
