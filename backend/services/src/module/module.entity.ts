import { ApiProperty } from '@nestjs/swagger';
import { UserGender, UserAccountType } from 'src/user/user.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { User } from 'src/user/user.entity';
import { StudentModule } from 'src/studentmodule/module/student-module.entity';

@Entity('module')
export class ModuleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  @IsUUID()
  @IsNotEmpty()
  @Column()
  name: string;

  @ApiProperty({
    example: '500.50',
    description: 'base pay',
  })
  @IsUUID()
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


  @OneToMany(() => StudentModule, (studentModule) => studentModule.module)
  studentModule: StudentModule[];
}
