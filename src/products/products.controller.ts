import { Controller, Get, Post, Body, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";

@Controller("products")
export class ProductsController {
    constructor(private productsService: ProductsService) {}

    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productsService.getAllProducts();
    }

    @Post()
    createProduct(@Body() createDto: CreateProductDto): Promise<Product> {
        return this.productsService.createProduct(createDto);
    }
}
