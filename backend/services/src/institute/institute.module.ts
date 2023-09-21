import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituteController } from './institute.controller';
import { Institute } from './institute.entity';
import { InstituteService } from './institute.service';

@Module({
  imports: [TypeOrmModule.forFeature([Institute])],
  controllers: [InstituteCfontroller],
  providers: [InstituteService],
})
export class InstituteModule {}
