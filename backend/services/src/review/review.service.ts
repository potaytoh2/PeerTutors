import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/crud/base.crud.service';
import { Repository } from 'typeorm';
import { Review } from './review.entity';

@Injectable()
export class ReviewService extends BaseCrudService<Review> {
  constructor(@InjectRepository(Review) repo: Repository<Review>) {
    super(repo);
  }
}
