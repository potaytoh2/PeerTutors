import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { BaseEntity } from 'src/crud/base.entity';
import { ModuleEntity } from 'src/module/module.entity';
import { Review } from 'src/review/review.entity';
import { Student } from 'src/student/student.entity';
import { Tutor } from 'src/tutor/tutor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('transaction')
export class Transaction extends BaseEntity {
  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'student id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  tutor_id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'student id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  student_id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'module id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  module_id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'module id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  request_id: string;

  @ApiProperty({
    example: '500.50',
    description: 'amount paid',
  })
  @IsNotEmpty()
  @Column()
  amount: number;

  @ApiProperty({
    example: 'verified good',
    description: 'verification comments',
  })
  @IsOptional()
  @MaxLength(100)
  @Column()
  verification_comments: string;

  @ApiProperty({
    example: true,
    description: 'whether transaction is verified',
  })
  @IsNotEmpty()
  @Column()
  isVerified: boolean;

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

  @OneToMany(() => Review, (review) => review.transaction)
  review: Review[];

  @ManyToOne(() => Tutor, (tutor) => tutor.transaction)
  @JoinColumn({ name: 'tutor_id', referencedColumnName: 'id' })
  tutor: Tutor;

  @ManyToOne(() => Student, (student) => student.transaction)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: Student;

  @ManyToOne(() => ModuleEntity, (module) => module.transaction)
  @JoinColumn({ name: 'module_id', referencedColumnName: 'id' })
  module: ModuleEntity;
}
