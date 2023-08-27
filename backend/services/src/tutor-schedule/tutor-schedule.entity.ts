import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { Tutor } from 'src/tutor/tutor.entity';
import { BaseEntity } from 'src/crud/base.entity';

@Entity('tutor-schedule')
export class TutorSchedule extends BaseEntity {
  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'tutor id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  tutor_id: string;

  @ApiProperty({
    example: '14/09/2023',
    description: 'Tutor available date',
  })
  @IsNotEmpty()
  @Column()
  available_date: Date;

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

  @ManyToOne(() => Tutor, (tutor) => tutor.tutorSchedule)
  @JoinColumn({ name: 'tutor_id', referencedColumnName: 'id' })
  tutor: Tutor;
}
