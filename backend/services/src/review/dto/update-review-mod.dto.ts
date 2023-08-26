import { PickType } from '@nestjs/swagger';
import { BaseReviewDto } from './base-review.dto';

export class UpdateReviewDto extends PickType(BaseReviewDto, [
  'id',
  'student_id',
  'tutor_id',
  'transaction_id',
  'rating',
  'review',
  'created_by',
  'updated_by',
] as const) {}
