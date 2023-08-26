import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InstituteModule } from './institute/institute.module';

import { UserController } from './user/user.controller';
import { InstituteController } from './institute/institute.controller';

@Module({
  imports: [AuthModule, UserModule, InstituteModule],
  controllers: [AppController, UserController, InstituteController],
  providers: [AppService],
})
export class AppModule {}
