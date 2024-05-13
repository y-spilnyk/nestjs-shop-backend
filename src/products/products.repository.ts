import { EntityManager, Repository, SelectQueryBuilder } from "typeorm"
import { Injectable, NotFoundException } from "@nestjs/common"
import { Products } from "./products.entity"
import { ProductsFilterDto } from "./dto/get-products-filter.dto"

@Injectable()
export class ProductsRepository extends Repository<Products> {
    constructor(private readonly eManager: EntityManager) {
        super(Products, eManager)
    }

    async getQuery(): Promise<SelectQueryBuilder<Products>> {
        return this.createQueryBuilder("products")
    }

    async getAllProducts(filterDto: ProductsFilterDto): Promise<Products[]> {
        const userData = await this.getQuery()
        
        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            console.log('=== key ===', key);
            console.log('=== value ===', value)
    
            if (key) userData.andWhere(`phones.${key} = :value`, { value });
        })
        return await userData.getMany()
    }
}