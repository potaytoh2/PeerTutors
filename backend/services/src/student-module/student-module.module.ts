import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  StudentModuleController } from './student-module.controller';
import { StudentModule } from './student-module.entity';
import {  StudentModuleService } from './student-module.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentModule])],
  controllers: [StudentModuleController],
  providers: [StudentModuleService],
})
export class ModuleModule {}
