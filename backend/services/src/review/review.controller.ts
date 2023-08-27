import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseReviewResponseDto } from './dto/base-review-response.dto';
import { BaseReviewDto } from './dto/base-review.dto';
import { CreateReviewDto } from './dto/create-review-mod.dto';
import { UpdateReviewDto } from './dto/update-review-mod.dto';
import { Review } from './review.entity';
import { ReviewService } from './review.service';

@Crud({
  model: {
    type: Review,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    join: {
      student: {},
      tutor: {},
      transaction: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseReviewDto,
    create: BaseReviewResponseDto,
    update: BaseReviewResponseDto,
  },
  dto: {
    create: CreateReviewDto,
    update: UpdateReviewDto,
  },
})
@ApiTags('Review')
@Controller('review')
export class ReviewController implements CrudController<Review> {
  constructor(public service: ReviewService) {}
}
