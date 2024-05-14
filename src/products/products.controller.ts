import { Controller, Get } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsFilterDto } from './dto/get-products-filter.dto'
import { ENDPOINTS } from './endpoints'

@Controller(ENDPOINTS.PRODUCTS)
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get()
  getAllProducts(filterDto: ProductsFilterDto): any { 
    this.productsService.getAllProducts(filterDto)
  }

}
