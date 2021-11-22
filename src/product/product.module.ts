import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([Product]),
    CacheModule.register({
      ttl: 60
    })
  ],
  exports: [ProductService]
})
export class ProductModule {}
