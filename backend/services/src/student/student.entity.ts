import { ApiProperty } from '@nestjs/swagger';
import { UserGender, UserAccountType } from 'src/user/user.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
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
import { TutorRequest } from 'src/tutor-request/tutor-request.entity';
import { Transaction } from 'src/transaction/transaction.entity';
import { Review } from 'src/review/review.entity';
import { BaseEntity } from 'src/crud/base.entity';

@Entity('student')
export class Student extends BaseEntity {
  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'user_id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  user_id: string;

  @ApiProperty({
    example: '5.0',
    description: 'Student rating',
  })
  @IsOptional()
  @Column()
  student_rating: number;

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

  @OneToOne(() => User)
  @JoinColumn({ name: 'id' })
  @IsOptional()
  user: User;

  @OneToMany(() => TutorRequest, (tutorRequest) => tutorRequest.student)
  tutorRequest: TutorRequest[];

  @OneToMany(() => Transaction, (transaction) => transaction.student)
  transaction: Transaction[];

  @OneToMany(() => Review, (review) => review.student)
  review: Review[];
}
