import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MaxLength,
  IsUUID,
  IsOptional,
  IsString,
} from 'class-validator';
import { StudentMod } from 'src/student-mod/student-mod.entity';
import { Student } from 'src/student/student.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import { TutorMod } from 'src/tutor-mod/tutor-mod.entity';
import { TutorRequest } from 'src/tutor-request/tutor-request.entity';
import { Tutor } from 'src/tutor/tutor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'transaction id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  transaction_id: string;

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
    description: 'tutor id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  tutor_id: string;

  @ApiProperty({
    example: '10.1',
    description: 'rating',
  })
  @IsOptional()
  @Column()
  rating: number;

  @ApiProperty({
    example: 'great!',
    description: 'review comments',
  })
  @IsOptional()
  @IsString()
  @MaxLength(5000)
  @Column()
  review: string;

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

  @ManyToOne(() => Tutor, (tutor) => tutor.review)
  @JoinColumn({ name: 'tutor_id', referencedColumnName: 'id' })
  tutor: Tutor;

  @ManyToOne(() => Student, (student) => student.review)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: Student;

  @ManyToOne(() => Transaction, (transaction) => transaction.review)
  @JoinColumn({ name: 'module_id', referencedColumnName: 'id' })
  transaction: Transaction;
}
