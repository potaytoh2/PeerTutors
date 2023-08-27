import { PickType } from '@nestjs/swagger';
import { Review } from '../review.entity';
export class BaseReviewDto extends PickType(Review, [
  'id',
  'student_id',
  'tutor_id',
  'transaction_id',
  'rating',
  'review',
  'created_by',
  'updated_by',
] as const) {}
