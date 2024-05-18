import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";
import { CategoryService } from "../category/category.service";

@Controller("products")
export class ProductsController {
    constructor(
        private productsService: ProductsService,
        private categoryService: CategoryService
    ) {}

    @Get()
    getAllProducts(): Promise<Product[]> {
        return this.productsService.getAllProducts();
    }

    @Post()
    async createProduct(@Body() createDto: CreateProductDto): Promise<Product> {
        const getCategoryById = await this.categoryService.getCategoryById(createDto.categoryId);
        return await this.productsService.createProduct(createDto, getCategoryById);
    }
}
