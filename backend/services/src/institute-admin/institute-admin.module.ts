import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituteAdminController } from './institute-admin.controller';
import { InstituteAdmin } from './institute-admin.entity';
import { InstituteAdminService } from './institute-admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([InstituteAdmin])],
  controllers: [InstituteAdminController],
  providers: [InstituteAdminService],
})
export class InstituteAdminModule {}
