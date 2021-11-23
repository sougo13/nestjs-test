import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '3691215',
  database: 'sys',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
  migrations: ["dist/src/migrations/*{.ts,.js}"],
  migrationsRun: false,
  cli: {
    migrationsDir: "src/migrations"
  }
}

export default config;