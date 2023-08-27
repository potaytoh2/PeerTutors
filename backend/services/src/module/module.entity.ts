import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { StudentMod } from 'src/student-mod/student-mod.entity';
import { TutorRequest } from 'src/tutor-request/tutor-request.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import { TutorMod } from 'src/tutor-mod/tutor-mod.entity';
import { BaseEntity } from 'src/crud/base.entity';

@Entity('module')
export class ModuleEntity extends BaseEntity {
  @ApiProperty({
    example: 'IS111',
    description: 'Module code',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  module_code: string;

  @ApiProperty({
    example: 'Bryen',
    description: 'name',
  })
  @IsNotEmpty()
  @Column()
  name: string;

  @ApiProperty({
    example: '500.50',
    description: 'base pay',
  })
  @IsOptional()
  @Column()
  base_pay: number;

  @ApiProperty({
    example: '4a2340ea-5dc2-403d-b133-17e9d306a293',
    description: 'property updated by this user',
  })
  @IsUUID()
  @IsOptional()
  @Column({ default: null })
  updated_by?: string;

  @ApiProperty({
    example: '4a2340ea-5dc2-403d-b133-17e9d306a293',
    description: 'property created by this user',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column({ default: null })
  created_by?: string;

  @OneToMany(() => StudentMod, (studentMod) => studentMod.module)
  studentMod: StudentMod[];

  @OneToMany(() => TutorRequest, (tutorRequest) => tutorRequest.module)
  tutorRequest: TutorRequest[];

  @OneToMany(() => Transaction, (transaction) => transaction.student)
  transaction: Transaction[];

  @OneToMany(() => TutorMod, (tutorMod) => tutorMod.module)
  tutorMod: TutorMod[];
}
