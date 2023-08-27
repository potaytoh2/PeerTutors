import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator';
import { BaseEntity } from 'src/crud/base.entity';
import { ModuleEntity } from 'src/module/module.entity';
import { Student } from 'src/student/student.entity';
import { Tutor } from 'src/tutor/tutor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity('tutor-request')
export class TutorRequest extends BaseEntity {
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
    description: 'tutor id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  student_id: string;

  @ApiProperty({
    example: '14/09/2023',
    description: 'Tutor available date',
  })
  @IsNotEmpty()
  @Column()
  date: Date;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'tutor id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  module_id: string;

  @ApiProperty({
    example: true,
    description: 'Whether request is accepted by tutor',
  })
  @IsNotEmpty()
  @Column()
  isAccepted: boolean;

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

  @ManyToOne(() => Tutor, (tutor) => tutor.tutorRequest)
  @JoinColumn({ name: 'tutor_id', referencedColumnName: 'id' })
  tutor: Tutor;

  @ManyToOne(() => Student, (student) => student.tutorRequest)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: Student;

  @ManyToOne(() => ModuleEntity, (module) => module.tutorRequest)
  @JoinColumn({ name: 'module_id', referencedColumnName: 'id' })
  module: ModuleEntity;
}
