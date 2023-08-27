import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateManyDto,
  Crud,
  CrudController,
  CrudRequest,
  GetManyDefaultResponse,
} from '@nestjsx/crud';
import { BaseTutorScheduleResponseDto } from './dto/base-tutor-schedule-response.dto';
import { BaseTutorScheduleDto } from './dto/base-tutor-schedule.dto';
import { CreateTutorScheduleDto } from './dto/create-tutor-schedule.dto';
import { UpdateTutorScheduleDto } from './dto/update-tutor-schedule.dto';
import { TutorSchedule } from './tutor-schedule.entity';
import { TutorScheduleService } from './tutor-schedule.service';

@Crud({
  model: {
    type: TutorSchedule,
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
      tutor: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseTutorScheduleDto,
    create: BaseTutorScheduleResponseDto,
    update: BaseTutorScheduleResponseDto,
  },
  dto: {
    create: CreateTutorScheduleDto,
    update: UpdateTutorScheduleDto,
  },
})
@ApiTags('TutorSchedule')
@Controller('tutor-schedule')
export class TutorScheduleController implements CrudController<TutorSchedule> {
  constructor(public service: TutorScheduleService) {}
}