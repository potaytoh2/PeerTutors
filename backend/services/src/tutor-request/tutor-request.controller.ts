import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseTutorRequestResponseDto } from './dto/base-tutor-request-response.dto';
import { BaseTutorRequestDto } from './dto/base-tutor-request.dto';
import { CreateTutorRequestDto } from './dto/create-tutor-request.dto';
import { UpdateTutorRequestDto } from './dto/update-tutor-request.dto';
import { TutorRequest } from './tutor-request.entity';
import { TutorRequestService } from './tutor-request.service';

@Crud({
  model: {
    type: TutorRequest,
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
      student: {},
      module: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseTutorRequestDto,
    create: BaseTutorRequestResponseDto,
    update: BaseTutorRequestResponseDto,
  },
  dto: {
    create: CreateTutorRequestDto,
    update: UpdateTutorRequestDto,
  },
})
@ApiTags('TutorRequest')
@Controller('tutor-request')
export class TutorRequestController implements CrudController<TutorRequest> {
  constructor(public service: TutorRequestService) {}
}
