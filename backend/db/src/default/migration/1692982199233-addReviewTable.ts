import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class addReviewTable1692982199233 implements MigrationInterface {
  tableName: string;
  constructor() {
    this.tableName = 'review';
  }
  public async up(queryRunner: QueryRunner): Promise<void> {
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
            name: 'transaction_id',
            type: 'varchar',
            length: '36',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'student_id',
            type: 'varchar',
            length: '36',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'tutor_id',
            type: 'varchar',
            length: '36',
            isUnique: false,
            isNullable: false,
          },
          {
            name: 'rating',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'review',
            type: 'varchar',
            length: '5000',
            isNullable: true,
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
        columnNames: ['transaction_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'transaction',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['student_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'student',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['tutor_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tutor',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.tableName);

    // Delete all foreign keys
    if (table) {
      await Promise.all(
        table.foreignKeys.map(async (foreignKey) => {
          await queryRunner.dropForeignKey(table, foreignKey);
        }),
      );
    }

    await queryRunner.dropTable(this.tableName);
  }
}
