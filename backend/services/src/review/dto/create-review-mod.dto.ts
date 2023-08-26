import { PickType } from '@nestjs/swagger/dist';
import { BaseReviewDto } from './base-review.dto';

export class CreateReviewDto extends PickType(BaseReviewDto, [
  'id',
  'student_id',
  'tutor_id',
  'transaction_id',
  'rating',
  'review',
  'created_by',
  'updated_by',
] as const) {}
