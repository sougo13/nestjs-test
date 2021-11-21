import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: Product
  },
  params: {
    productId: {
      field: 'productId',
      type: 'number',
      primary: true,
    }
  }
})

@ApiTags("Products")
@Controller("products")
export class ProductController implements CrudController<Product> {
  constructor(public service: ProductService) {
  }
}
