import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class addWalletTransactionsTable1692981991179
  implements MigrationInterface
{
  tableName: string;
  constructor() {
    this.tableName = 'wallet_transaction';
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
            name: 'wallet_id',
            type: 'varchar',
            length: '36',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'transaction_id',
            type: 'varchar',
            length: '36',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'amount',
            type: 'float',
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
        columnNames: ['wallet_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tutor_wallet',
        onDelete: 'CASCADE',
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
