import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { Institute } from 'src/institute/institute.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAccountType, UserGender } from './user.enum';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Ryan Ang',
    description: 'Name of user',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
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

  @ManyToOne(() => Institute, (institute) => institute.user)
  @JoinColumn({ name: 'institute_id', referencedColumnName: 'id' })
  institute: Institute;
}
