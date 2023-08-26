import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseModuleResponseDto } from './dto/base-module-response.dto';
import { BaseModuleDto } from './dto/base-module.dto';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { ModuleEntity } from './module.entity';
import { ModuleService } from './module.service';

@Crud({
  model: {
    type: ModuleEntity,
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
      studentMod: {},
      tutorRequest: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseModuleDto,
    create: BaseModuleResponseDto,
    update: BaseModuleResponseDto,
  },
  dto: {
    create: CreateModuleDto,
    update: UpdateModuleDto,
  },
})
@ApiTags('Module')
@Controller('module')
export class ModuleController implements CrudController<ModuleEntity> {
  constructor(public service: ModuleService) {}
}
