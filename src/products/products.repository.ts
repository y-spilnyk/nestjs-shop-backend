import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Product } from "./products.entity";
import { CreateProductDto } from "./dto/create-products.dto";
import { CategoryRepository } from "../category/category.repository";

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
            console.log("da");

            const userData = await this.find();
            return userData;
        } catch (error) {
            console.error("Error getting products:", error);
            throw error;
        }
    }

    async createProduct(data: CreateProductDto): Promise<Product> {
        try {
            // get category by id
            const { categoryId } = data;
            // const newProducts = {...data}
            // if (categoryId) {
            //     const getCategory = await this.categoryRepository.getCategoryById(
            //         categoryId as any
            //     );
            //     if (getCategory?.id) {
            //         newProducts.category = getCategory
            //     }
            // }
            const product = this.create(data);
            return await this.save(product);
        } catch (error) {}
    }
}
