import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Products } from "./products.entity";

@Injectable()
export class ProductsRepository extends Repository<Products> {
    constructor(private readonly entityManager: EntityManager) {
        super(Products, entityManager);
    }

    async getAllProducts(): Promise<Products[]> {
        try {
            return await this.find({
                relations: ["category"]
            });
            // const userData = await this.createQueryBuilder(ENDPOINTS.PRODUCTS).getMany();
            // return userData;
        } catch (error) {
            console.error("Error getting products:", error);
            throw error;
        }
    }
}