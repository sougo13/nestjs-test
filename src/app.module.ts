import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [Product],
      synchronize: true,
      migrations: ["dist/src/migrations/*{.ts,.js}"],
      migrationsRun: true,
      cli: {
        migrationsDir: "src/migrations"
      }
    }),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
