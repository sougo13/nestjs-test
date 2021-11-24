import { CacheInterceptor, Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateManyDto, Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: CreateProductDto
  },
  params: {
    productId: {
      field: 'productId',
      type: 'number',
      primary: true,
    }
  },
  routes: {
    exclude: ['replaceOneBase'],
    deleteOneBase: {
      returnDeleted: true
    }
  }
})

@ApiTags("Products")
@Controller("products")
export class ProductController implements CrudController<CreateProductDto> {
  constructor(public service: ProductService) { }

  get base(): CrudController<CreateProductDto> {
    return this;
  }

  @Override()
  @UseInterceptors(CacheInterceptor)
  async getOne(@ParsedRequest() req: CrudRequest) {
    return this.base.getOneBase(req);
  }

  @Override()
  @UseInterceptors(CacheInterceptor)
  async getMany(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  createMany(
    @ParsedBody() dto: CreateManyDto<CreateProductDto>,
    @ParsedRequest() req: CrudRequest,
  ) {
    return this.base.createManyBase(req, dto);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateProductDto) {
    return this.base.createOneBase(req, dto);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateProductDto) {
    return this.base.updateOneBase(req, dto);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async replaseOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: Product) {
    return this.base.replaceOneBase(req, dto);
  }

  @Override()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteOne(
    @ParsedRequest() req: CrudRequest,
  ) {
    return this.base.deleteOneBase(req);
  }
}

