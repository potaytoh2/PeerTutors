import { DataSource } from 'typeorm';

const db = new DataSource({
  name: 'mysqldb',
  type: 'mysql',
  host: 'mysqldb',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'peer_tutor',
  synchronize: false,
  logging: true,
  entities: ['src/default/entity/*.ts'],
  migrations: ['src/default/migration/*.ts'],
  subscribers: ['src/default/subscriber/*.ts'],
});

export default db;
