import { PartialType, OmitType } from '@nestjs/swagger';
import { BaseReviewDto } from './base-review.dto';

export class UpdateReviewDto extends PartialType(
  OmitType(BaseReviewDto, ['id', 'created_by', 'updated_by'] as const),
) {}
