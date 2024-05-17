import { Controller, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Products } from "./products.entity";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getAllProducts(): Promise<Products[]> {
        return this.productsService.getAllProducts();
    }
}
