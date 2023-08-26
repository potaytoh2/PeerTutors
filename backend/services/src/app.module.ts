import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InstituteModule } from './institute/institute.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institute } from './institute/institute.entity';
import { User } from './user/user.entity';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { TutorService } from './tutor/tutor.service';
import { TutorController } from './tutor/tutor.controller';
import { TutorModule } from './tutor/tutor.module';
import { InstituteAdminController } from './institute-admin/institute-admin.controller';
import { InstituteAdminService } from './institute-admin/institute-admin.service';
import { InstituteAdminModule } from './institute-admin/institute-admin.module';
import { ModuleModule } from './module/module.module';
const entities = [User, Institute];
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysqldb',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'peer_tutor',
      entities: entities,
      synchronize: false,
      logging: true,
    }),
    AuthModule,
    UserModule,
    InstituteModule,
    ModuleModule,
    StudentModule,
    TutorModule,
    InstituteAdminModule,

  ],
  controllers: [AppController, StudentController, TutorController, InstituteAdminController],
  providers: [AppService, StudentService, TutorService, InstituteAdminService],
})
export class AppModule {}
