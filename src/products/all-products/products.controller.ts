import { Controller, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ENDPOINTS } from "../../endpoints";
import { Products } from "./products.entity";

@Controller(ENDPOINTS.PRODUCTS)
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getAllProducts(): Promise<Products[]> {
        return this.productsService.getAllProducts();
    }
}
