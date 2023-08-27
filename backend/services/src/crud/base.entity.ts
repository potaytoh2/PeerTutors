import {BeforeInsert, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {InternalServerErrorException} from '@nestjs/common';
import {ApiProperty} from '@nestjs/swagger';

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        readOnly: true,
        example: '17e3e236-aadf-4131-833c-2d9a0031eee2',
        description: 'Primary Key UUID',
    })
    id?: string;

    @BeforeInsert()
    checkUUID() {
        if (this.id) {
            throw new InternalServerErrorException('Invalid ID');
        }
    }


}
