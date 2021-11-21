import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ["dist/src/migrations/*{.ts,.js}"],
  migrationsRun: true,
  cli: {
    migrationsDir: "src/migrations"
  }
}

export default config;