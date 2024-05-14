import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository"
import { Products } from "./products.entity"
import { ProductsFilterDto } from "./dto/get-products-filter.dto"

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository: ProductsRepository
    ) {}

    async getAllProducts(filterDto: ProductsFilterDto): Promise<Products[]> {
        return this.productsRepository.getAllProducts(filterDto);
    }

}
