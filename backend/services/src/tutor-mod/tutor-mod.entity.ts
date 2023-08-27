import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator';
import { BaseEntity } from 'src/crud/base.entity';
import { ModuleEntity } from 'src/module/module.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('tutor-mod')
export class TutorMod extends BaseEntity {
  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'tutor id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  tutor_id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'module id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  module_id: string;

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

  @ManyToOne(() => ModuleEntity, (module) => module.tutorMod)
  @JoinColumn({ name: 'module_id', referencedColumnName: 'id' })
  module: ModuleEntity;
}
