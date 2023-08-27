import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseInstituteAdminResponseDto } from './dto/base-institute-admin-response.dto';
import { BaseInstituteAdmintDto } from './dto/base-institute-admin.dto';
import { CreateInstituteAdminDto } from './dto/create-institute-admin.dto';
import { UpdateInstituteAdminDto } from './dto/update-institute-admin.dto';
import { InstituteAdmin } from './institute-admin.entity';
import { InstituteAdminService } from './institute-admin.service';

@Crud({
  model: {
    type: InstituteAdmin,
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
    get: BaseInstituteAdmintDto,
    create: BaseInstituteAdminResponseDto,
    update: BaseInstituteAdminResponseDto,
  },
  dto: {
    create: CreateInstituteAdminDto,
    update: UpdateInstituteAdminDto,
  },
})
@ApiTags('Institute-Admin')
@Controller('institute-admin')
export class InstituteAdminController
  implements CrudController<InstituteAdmin>
{
  constructor(public service: InstituteAdminService) {}
}
