import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModController } from './student-mod.controller';
import { StudentMod } from './student-mod.entity';
import { StudentModService } from './student-mod.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentMod])],
  controllers: [StudentModController],
  providers: [StudentModService],
})
export class StudentModModule {}
