import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoriesFilterDto } from "./dto/categories.filter.dto";

@Injectable()
export class CategoryRepository extends Repository<Category> {
    constructor(private readonly entityManager: EntityManager) {
        super(Category, entityManager);
    }

    async getCategories(): Promise<Category[]> {
        return await this.createQueryBuilder("category").getMany();
    }

    async getCategoryById(filterDto: CategoriesFilterDto): Promise<Category[]> {
        const userData = this.createQueryBuilder("category");

        if (filterDto) {
            userData.andWhere("category.id = :id", { id: filterDto.id });
        }
        return await userData.getMany();
    }
}
