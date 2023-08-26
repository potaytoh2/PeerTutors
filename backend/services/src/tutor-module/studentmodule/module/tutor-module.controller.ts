import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import {  BaseModuleResponseDto } from './dto/base-tutor-module-response.dto';
import { BaseTutorModuleDto } from './dto/base-tutor-module.dto';
import {  CreateTutorModuleDto } from './dto/create-tutor-module.dto';
import { UpdateTutorModuleDto } from './dto/update-tutor-module.dto';
import { TutorModule } from './tutor-module.entity';
import { TutorModuleService } from './tutor-module.service';

@Crud({
  model: {
    type: TutorModule,
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
      tutorModule: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseTutorModuleDto,
    create: BaseModuleResponseDto,
    update: BaseModuleResponseDto,
  },
  dto: {
    create: CreateTutorModuleDto,
    update: UpdateTutorModuleDto,
  },
})
@ApiTags('TutorModule')
@Controller('tutor-module')
export class TutorModuleController implements CrudController<TutorModule> {
  constructor(public service: TutorModuleService) {}
}
