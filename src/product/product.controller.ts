import { CacheInterceptor, Controller, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
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
  constructor(public service: ProductService) {}

  get base(): CrudController<Product> {
    return this;
  }

  @Override()
  async getMany(@ParsedRequest() req: CrudRequest) {
    const allProducts = await this.base.getManyBase(req) as Product[];
    return this.service.chunkArray(allProducts, 4);
  }

  @Override()
  @UseInterceptors(CacheInterceptor)
  async getOne(@ParsedRequest() req: CrudRequest){
    return this.base.getOneBase(req);
  }
}
