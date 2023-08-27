import {BeforeInsert, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {InternalServerErrorException} from '@nestjs/common';
import {ApiProperty} from '@nestjs/swagger';
import {Exclude} from 'class-transformer';
import dayjs from 'dayjs';

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        readOnly: true,
        example: '17e3e236-aadf-4131-833c-2d9a0031eee2',
        description: 'Primary Key UUID',
    })
    id?: string;

    @CreateDateColumn({nullable: true})
    @ApiProperty({
        example: '2022-04-20T08:25:53.156Z',
        description: 'property created at this time',
    })
    created_at?: Date;

    @ApiProperty({
        example: '2022-04-20T08:25:53.156Z',
        description: 'property updated at this time',
    })
    @UpdateDateColumn({nullable: true})
    updated_at?: Date;

    @BeforeInsert()
    checkUUID() {
        if (this.id) {
            throw new InternalServerErrorException('Invalid ID');
        }
    }

    @BeforeInsert()
    setUpdatedAtCurrentTimestamp() {
        this.updated_at = dayjs().toDate();
    }
}
