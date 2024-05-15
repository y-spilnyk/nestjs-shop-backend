import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Products } from "./products.entity";
import { ENDPOINTS } from "../../endpoints";

@Injectable()
export class ProductsRepository extends Repository<Products> {
    constructor(private readonly eManager: EntityManager) {
        super(Products, eManager);
    }

    async getAllProducts(): Promise<Products[]> {
        try {
            const userData = await this.createQueryBuilder(ENDPOINTS.PRODUCTS).getMany();
            console.log("=== userData ===", userData);
            return userData;
        } catch (error) {
            console.error("Error getting products:", error);
            throw error;
        }
    }
}
