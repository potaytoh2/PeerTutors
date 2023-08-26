import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { User } from './user.entity';

@Injectable()
export class UserService extends BaseCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }
}
