import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseTutorDto } from 'src/tutor/dto/base-tutor.dto';
import { BaseTutorModResponseDto } from './dto/base-tutor-mod-response.dto';
import { CreateTutorModDto } from './dto/create-tutor-mod.dto';
import { UpdateTutorModDto } from './dto/update-tutor-mod.dto';
import { TutorMod } from './tutor-mod.entity';
import { TutorModService } from './tutor-mod.service';

@Crud({
  model: {
    type: TutorMod,
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
    get: BaseTutorDto,
    create: BaseTutorModResponseDto,
    update: BaseTutorModResponseDto,
  },
  dto: {
    create: CreateTutorModDto,
    update: UpdateTutorModDto,
  },
})
@ApiTags('TutorMod')
@Controller('tutor-mod')
export class TutorModController implements CrudController<TutorMod> {
  constructor(public service: TutorModService) {}
}
