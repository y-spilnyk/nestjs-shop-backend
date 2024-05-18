import { EntityManager, Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";
import { Category } from "src/category/category.entity";

@Injectable()
export class ProductsRepository extends Repository<Product> {
    constructor(private readonly entityManager: EntityManager) {
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

    async getProductById(id: string): Promise<Product> {
        const userData = await this.createQueryBuilder("products")
            .where((id = id))
            .getOne();
        if (!userData) throw new NotFoundException();
        return userData;
    }

    async createProduct(data: CreateProductDto, categoryId: Category): Promise<Product> {
        const product = this.create({
            ...data,
            category: categoryId
        });
        return await this.save(product);
    }
}
