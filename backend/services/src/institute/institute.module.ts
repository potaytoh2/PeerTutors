import { Module } from '@nestjs/common';
import { InstituteService } from './institute.service';

@Module({
  providers: [InstituteService]
})
export class InstituteModule {}
