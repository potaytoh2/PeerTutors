import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { User } from 'src/user/user.entity';
import { TutorTier } from './tutor.enum';

@Entity('tutor')
export class Tutor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
    description: 'Tutor rating',
  })
  @IsOptional()
  @Column()
  tutor_rating: number;

  @ApiProperty({
    example: 'bronze',
    description: 'Tutor tier',
  })
  @Column()
  @IsNotEmpty()
  @IsEnum(TutorTier)
  tutor_tier?: TutorTier;

  @ApiProperty({
    example: true,
    description: 'To show if request to be tutor is verified',
  })
  @Column()
  @IsNotEmpty()
  @IsBoolean()
  is_verified?: boolean;

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
  @IsNotEmpty()
  user: User;
}
