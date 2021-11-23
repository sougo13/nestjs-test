import { CacheInterceptor, Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
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
  @UseInterceptors(CacheInterceptor)
  async getOne(@ParsedRequest() req: CrudRequest){
    return this.base.getOneBase(req);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Product){
    return this.base.createOneBase(req, dto);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Product){
    return this.base.updateOneBase(req, dto);
  }
}
