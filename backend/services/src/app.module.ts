import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InstituteModule } from './institute/institute.module';

import { UserController } from './user/user.controller';
import { InstituteController } from './institute/institute.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institute } from './institute/institute.entity';
import { User } from './user/user.entity';
import { ConfigModule } from '@nestjs/config';
const entities = [User, Institute];
@Module({
  imports: [
    AuthModule,
    UserModule,
    InstituteModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'mysqldb',
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
  ],
  controllers: [AppController, UserController, InstituteController],
  providers: [AppService],
})
export class AppModule {}
