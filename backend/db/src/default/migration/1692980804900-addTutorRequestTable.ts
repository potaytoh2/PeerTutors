import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class addTutorRequestTable1692980804900 implements MigrationInterface {
  tableName: string;
  constructor() {
    this.tableName = 'tutoring_request';
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
            name: 'date',
            type: 'date',
          },
          {
            name: 'tutor_id',
            type: 'varchar',
            length: '36',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'student_id',
            type: 'varchar',
            length: '36',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'module_id',
            type: 'varchar',
            length: '36',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'isAccepted',
            type: 'boolean',
            isNullable: false,
            default: false,
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
        columnNames: ['student_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'student',
        onDelete: 'CASCADE',
      }),
    );
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['module_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'module',
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
