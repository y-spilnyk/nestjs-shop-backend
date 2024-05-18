import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto"

@Injectable()
export class ProductsRepository extends Repository<Product> {
    constructor(private readonly entityManager: EntityManager) {
        super(Product, entityManager);
    }

    async getAllProducts(): Promise<Product[]> {
        try {
            const userData = await this.createQueryBuilder("products").getMany();
            return userData;
        } catch (error) {
            console.error("Error getting products:", error);
            throw error;
        }
    }

    async createProduct(data: CreateProductDto): Promise<Product> {
        try {
            // get category by id
            const product = this.create(data);
            
            return await this.save(product);
        } catch (error) {}
    }
}
