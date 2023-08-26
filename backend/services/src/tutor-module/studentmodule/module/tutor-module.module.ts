import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  TutorModuleController } from './tutor-module.controller';
import { TutorModule } from './tutor-module.entity';
import {  TutorModuleService } from './tutor-module.service';

@Module({
  imports: [TypeOrmModule.forFeature([TutorModule])],
  controllers: [TutorModuleController],
  providers: [TutorModuleService],
})
export class ModuleModule {}
