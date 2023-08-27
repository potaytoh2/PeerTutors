import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { BaseEntity } from 'src/crud/base.entity';
import { InstituteAdmin } from 'src/institute-admin/institute-admin.entity';
import { Institute } from 'src/institute/institute.entity';
import { Student } from 'src/student/student.entity';
import { Tutor } from 'src/tutor/tutor.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAccountType, UserGender } from './user.enum';

@Entity('user')
export class User extends BaseEntity {
  @ApiProperty({
    example: 'John',
    description: 'First name of actor representative',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'ryanang@smu.edu.sg',
    description: 'Email of the user',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: 'Male',
    description: 'Gender of user',
  })
  @Column()
  @IsNotEmpty()
  @IsEnum(UserGender)
  gender?: UserGender;

  @ApiProperty({
    example: 'Student',
    description: 'Role of the user',
  })
  @Column()
  @IsNotEmpty()
  @IsEnum(UserAccountType)
  account_type?: UserAccountType;

  @ApiProperty({
    example: '12345678901019292',
    description: 'Institute Id',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  institute_id?: string;

  @ApiProperty({
    example: 'ce27b144-4d2f-49cd-99ee-0616140540b1',
    description: 'property created by this user',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  created_by: string;

  @ApiProperty({
    example: '4a2340ea-5dc2-403d-b133-17e9d306a293',
    description: 'property updated by this user',
  })
  @IsUUID()
  @IsOptional()
  @Column({ default: null })
  updated_by?: string;

  @OneToOne(() => Student)
  @JoinColumn({ referencedColumnName: 'user_id', name: 'id' })
  @IsOptional()
  student: Student;

  @OneToOne(() => Tutor)
  @JoinColumn({ referencedColumnName: 'user_id', name: 'id' })
  @IsOptional()
  tutor: Tutor;

  @OneToOne(() => InstituteAdmin)
  @JoinColumn({ referencedColumnName: 'user_id', name: 'id' })
  @IsOptional()
  instituteAdmin: InstituteAdmin;

  @ManyToOne(() => Institute, (institute) => institute.user)
  @JoinColumn({ name: 'institute_id', referencedColumnName: 'id' })
  institute: Institute;
}
