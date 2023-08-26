import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableExclusion,
  TableForeignKey,
} from 'typeorm';

export class addUserTable1692881180159 implements MigrationInterface {
  tableName: string;
  constructor() {
    this.tableName = 'user';
  }
  public async up(queryRunner: QueryRunner): Promise<void> {
    // create `trd_trader` table
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'email',
            type: 'varchar(100)',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar(50)',
            isNullable: false,
          },
          {
            name: 'gender',
            type: 'enum',
            enum: ['male', 'female', 'non-binary'],
            enumName: 'userGender',
            isNullable: false,
          },
          {
            name: 'account_type',
            type: 'enum',
            enum: ['student', 'admin', 'both'],
            enumName: 'userRole',
            isNullable: false,
          },
          {
            name: 'institute_id',
            type: 'varchar',
            length: '36',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_by',
            type: 'varchar(36)',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: null,
            isNullable: true,
          },
          {
            name: 'updated_by',
            type: 'varchar(36)',
            default: null,
            isNullable: true,
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['institute_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'institute',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
