import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";
import { CategoryService } from '../category/category.service';
@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository,
        private categoryService: CategoryService
    ) {}

    async getAllProducts(): Promise<Product[]> {
        return await this.productsRepository.getAllProducts();
    }

    async createProduct(createDto: CreateProductDto): Promise<Product> {
        const getCategoryById = await this.categoryService.getCategoryById(createDto.categoryId);
        return await this.productsRepository.createProduct(createDto, getCategoryById);
    }
}
