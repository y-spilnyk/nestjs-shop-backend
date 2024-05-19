import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";
import { CategoryService } from "../category/category.service";
import { FeaturesService } from "src/features/features.service";
@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository,
        private categoryService: CategoryService,
        private featureService: FeaturesService
    ) {}

    async getAllProducts(): Promise<Product[]> {
        return await this.productsRepository.getAllProducts();
    }

    async getProductById(id: string): Promise<Product> {
        return await this.productsRepository.getProductById(id);
    }

    async createProduct(createDto: CreateProductDto): Promise<Product> {
        const getCategoryById = await this.categoryService.getCategoryById(createDto.categoryId);
        const getFeatureById = await this.featureService.getFeatureIdByValue(createDto.featureId);
        return await this.productsRepository.createProduct(
            createDto,
            getCategoryById,
            getFeatureById
        );
    }
}
