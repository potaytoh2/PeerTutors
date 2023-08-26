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
import { ModuleEntity } from 'src/module/module.entity';

@Entity('tutorModule')
export class TutorModule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhsc9',
    description: 'tutor_id',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  tutor_id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhsr5',
    description: 'module_id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  module_id: string;


  @ApiProperty({
    example: '4a2340ea-5dc2-403d-b133-17e9d306a256',
    description: 'property updated by this user',
  })
  @IsUUID()
  @IsOptional()
  @Column({ default: null })
  updated_by?: string;

  @ApiProperty({
    example: '4a2340ea-5dc2-403d-b133-17e9d306a256',
    description: 'property created by this user',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column({ default: null })
  created_by?: string;


  @ManyToOne(() => ModuleEntity, (module) => module.tutorModule)
  @JoinColumn({ name: 'module_id', referencedColumnName: 'id' })
  module: ModuleEntity;

}
