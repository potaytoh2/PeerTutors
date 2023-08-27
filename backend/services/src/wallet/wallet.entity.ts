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
import { Tutor } from 'src/tutor/tutor.entity';
import { WalletTransaction } from 'src/wallet-transaction/wallet-transaction.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity('wallet')
export class Wallet extends BaseEntity {
  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhsc9',
    description: 'tutor_id',
  })
  @Column()
  @IsNotEmpty()
  @IsString()
  tutor_id: string;

  @ApiProperty({
    example: '1000.80',
    description: 'amount',
  })
  @Column()
  @IsNotEmpty()
  amount: number;

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

  @OneToOne(() => Tutor)
  @JoinColumn({ referencedColumnName: 'wallet_id', name: 'id' })
  @IsOptional()
  tutor: Tutor;

  @OneToMany(
    () => WalletTransaction,
    (walletTransaction) => walletTransaction.wallet,
  )
  walletTransaction: WalletTransaction[];
}
