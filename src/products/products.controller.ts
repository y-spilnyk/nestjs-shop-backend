import { Controller, Get } from '@nestjs/common'
import { ProductsService } from './products.service'
import { Products } from './products.entity'
import { ProductsFilterDto } from './dto/get-products-filter.dto'

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get()
  getAllProducts(filterDto: ProductsFilterDto): any { // Promise<Products[]>
    this.productsService.getAllProducts(filterDto)
  }

}
