import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BaseUserResponseDto } from './dto/base-user-response.dto';
import { BaseUserDto } from './dto/base-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Crud({
  model: {
    type: User,
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
      institute: {},
      tutor: {},
      student: {},
    },
    limit: 20,
    maxLimit: 50,
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['deleteOneBase', 'createManyBase', 'replaceOneBase'],
  },
  serialize: {
    get: BaseUserDto,
    create: BaseUserResponseDto,
    update: BaseUserResponseDto,
  },
  dto: {
    create: CreateUserDto,
    update: UpdateUserDto,
  },
})
@ApiTags('User')
@Controller('user')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
