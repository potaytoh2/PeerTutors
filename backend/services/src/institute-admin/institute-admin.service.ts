import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { InstituteAdmin } from './institute-admin.entity';

@Injectable()
export class InstituteAdminService extends BaseCrudService<InstituteAdmin> {
  constructor(
    @InjectRepository(InstituteAdmin) repo: Repository<InstituteAdmin>,
  ) {
    super(repo);
  }
}
