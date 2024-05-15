import { DataSource, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { ENDPOINTS } from "../../endpoints";
import { Products } from "./products.entity";

@Injectable()
export class ProductsRepository extends Repository<Products> {
    constructor(private readonly dataSource: DataSource) {
        super(Products, dataSource.createEntityManager());
    }

    async getAllProducts(): Promise<Products[]> {
        try {
            const userData = await this.createQueryBuilder(ENDPOINTS.PRODUCTS).getMany();
            return userData;
        } catch (error) {
            console.error("Error getting products:", error);
            throw error;
        }
    }
}
