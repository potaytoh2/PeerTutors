import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNotEmpty, IsOptional } from 'class-validator';
import { Tutor } from 'src/tutor/tutor.entity';
import { Wallet } from 'src/wallet/wallet.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('wallet-transaction')
export class WalletTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'wallet id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  wallet_id: string;

  @ApiProperty({
    example: '17e3e236-aadf-4131-833c-2d9a0031dhse2',
    description: 'transaction id',
  })
  @IsUUID()
  @IsNotEmpty()
  @Column()
  transaction_id: string;

  @ApiProperty({
    example: '500.50',
    description: 'amount paid',
  })
  @IsNotEmpty()
  @Column()
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

  @ManyToOne(() => Wallet, (wallet) => wallet.walletTransaction)
  @JoinColumn({ name: 'wallet_id', referencedColumnName: 'id' })
  wallet: Wallet;
}
