import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";
import { CategoryRepository } from "../category/category.repository";
import { Category } from "src/category/category.entity";

@Injectable()
export class ProductsRepository extends Repository<Product> {
    constructor(
        private readonly entityManager: EntityManager,
        private categoryRepository: CategoryRepository
    ) {
        super(Product, entityManager);
    }

    async getAllProducts(): Promise<Product[]> {
        try {
            const userData = await this.find();
            return userData;
        } catch (error) {
            console.error("Error getting products:", error);
            throw error;
        }
    }

    async createProduct(data: CreateProductDto, categoryId: Category): Promise<Product> {
        const product = this.create({
            ...data,
            category: categoryId
        });
        return await this.save(product);
    }
}
