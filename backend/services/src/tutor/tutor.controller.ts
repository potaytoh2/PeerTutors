import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseTutorResponseDto } from './dto/base-tutor-response.dto';
import { BaseTutorDto } from './dto/base-tutor.dto';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { Tutor } from './tutor.entity';
import { TutorService } from './tutor.service';

@Crud({
  model: {
    type: Tutor,
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
      user: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseTutorDto,
    create: BaseTutorResponseDto,
    update: BaseTutorResponseDto,
  },
  dto: {
    create: CreateTutorDto,
    update: UpdateTutorDto,
  },
})
@ApiTags('Tutor')
@Controller('tutor')
export class TutorController implements CrudController<Tutor> {
  constructor(public service: TutorService) {}
}
