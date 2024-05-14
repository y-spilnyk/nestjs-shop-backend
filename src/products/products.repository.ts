import { EntityManager, Repository, SelectQueryBuilder } from "typeorm"
import { Injectable, NotFoundException } from "@nestjs/common"
import { Products } from "./products.entity"
import { ProductsFilterDto } from "./dto/get-products-filter.dto"
import { ENDPOINTS } from "./endpoints"

@Injectable()
export class ProductsRepository extends Repository<Products> {
    constructor(private readonly eManager: EntityManager) {
        super(Products, eManager)
    }

    // async getQuery(): Promise<SelectQueryBuilder<Products>> {
    //     return this.createQueryBuilder(ENDPOINTS.PRODUCTS)
    // }

    async getAllProducts(filterDto: ProductsFilterDto): Promise<Products[]> {
        // const userData = await this.getQuery()
        
        // Object.keys(filterDto).forEach((key) => {
        //     if (key) userData.andWhere(`${ENDPOINTS.PRODUCTS}.${key} = :value`, { key });
        // })
        // return await userData.getMany()

        return await this.createQueryBuilder(ENDPOINTS.PRODUCTS).loadAllRelationIds().getMany()
    }
}