import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";
import { Category } from "src/category/category.entity"
@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository
    ) {}

    async getAllProducts(): Promise<Product[]> {
        return await this.productsRepository.getAllProducts();
    }

    async createProduct(createDto: CreateProductDto, categoryId: Category): Promise<Product> {
        return await this.productsRepository.createProduct(createDto, categoryId);
    }
}
