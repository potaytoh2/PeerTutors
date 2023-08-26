import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { InstituteModule } from './institute/institute.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institute } from './institute/institute.entity';
import { User } from './user/user.entity';
import { InstituteAdminModule } from './institute-admin/institute-admin.module';
import { ModuleModule } from './module/module.module';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { InstituteAdmin } from './institute-admin/institute-admin.entity';
import { ModuleEntity } from './module/module.entity';
import { Student } from './student/student.entity';
import { Tutor } from './tutor/tutor.entity';
import { StudentMod } from './student-mod/student-mod.entity';
import { StudentModModule } from './student-mod/student-mod.module';
import { TutorScheduleController } from './tutor-schedule/tutor-schedule.controller';
import { TutorScheduleService } from './tutor-schedule/tutor-schedule.service';
import { TutorScheduleModule } from './tutor-schedule/tutor-schedule.module';
import { TutorSchedule } from './tutor-schedule/tutor-schedule.entity';
import { TutorRequestModule } from './tutor-request/tutor-request.module';
import { TutorRequest } from './tutor-request/tutor-request.entity';
import { TransactionModule } from './transaction/transaction.module';
import { TutorModModule } from './tutor-mod/tutor-mod.module';
import { TutorMod } from './tutor-mod/tutor-mod.entity';
import { Transaction } from './transaction/transaction.entity';
import { Wallet } from './wallet/wallet.entity';
import { WalletModule } from './wallet/wallet.module';
import { WalletTransactionController } from './wallet-transaction/wallet-transaction.controller';
import { WalletTransactionService } from './wallet-transaction/wallet-transaction.service';
import { WalletTransactionModule } from './wallet-transaction/wallet-transaction.module';
import { WalletTransaction } from './wallet-transaction/wallet-transaction.entity';
import { ReviewModule } from './review/review.module';
import { Review } from './review/review.entity';

const entities = [
  Institute,
  InstituteAdmin,
  ModuleEntity,
  Student,
  StudentMod,
  Transaction,
  Tutor,
  TutorMod,
  TutorRequest,
  TutorSchedule,
  User,
  Wallet,
  WalletTransaction,
  Review,
];
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
    InstituteModule,
    InstituteAdminModule,
    ModuleModule,
    StudentModule,
    StudentModModule,
    TransactionModule,
    TutorModule,
    TutorModModule,
    TutorRequestModule,
    TutorScheduleModule,
    UserModule,
    WalletModule,
    WalletTransactionModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
