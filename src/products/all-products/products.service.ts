import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository";
import { Products } from "./products.entity";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository
    ) {}

    async getAllProducts(): Promise<Products[]> {
        return this.productsRepository.getAllProducts();
    }
}
