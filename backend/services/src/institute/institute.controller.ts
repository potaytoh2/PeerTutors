import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseInstituteResponseDto } from './dto/base-institute-response.dto';
import { BaseInstituteDto } from './dto/base-institute.dto';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { Institute } from './institute.entity';
import { InstituteService } from './institute.service';

@Crud({
  model: {
    type: Institute,
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
    get: BaseInstituteDto,
    create: BaseInstituteResponseDto,
    update: BaseInstituteResponseDto,
  },
  dto: {
    create: CreateInstituteDto,
    update: UpdateInstituteDto,
  },
})
@ApiTags('Institute')
@Controller('institute')
export class InstituteController implements CrudController<Institute> {
  constructor(public service: InstituteService) {}
}
