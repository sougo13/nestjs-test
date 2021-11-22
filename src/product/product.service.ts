import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService extends TypeOrmCrudService<Product>{
  constructor(@InjectRepository(Product) repo) {
    super(repo)
  }

  chunkArray(array: Product[], chunk: number): Product[] {
    const newArray = [];
    for (let i = 0; i < array.length; i += chunk) {
      newArray.push(array.slice(i, i + chunk));
    }
    return newArray;
  }
}
