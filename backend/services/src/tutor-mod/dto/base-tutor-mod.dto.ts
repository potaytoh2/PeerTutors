import { PickType } from '@nestjs/swagger';
import { TutorMod } from '../tutor-mod.entity';

export class BaseTutorModDto extends PickType(TutorMod, [
  'id',
  'tutor_id',
  'module_id',
  'created_by',
  'updated_by',
] as const) {}
