import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Category } from "./category.entity";
import { CategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoryRepository extends Repository<Category> {
    constructor(private readonly entityManager: EntityManager) {
        super(Category, entityManager);
    }

    async getCategories(): Promise<Category[]> {
        return await this.createQueryBuilder("categories").getMany();
    }

    async createCategory(createDto: CategoryDto): Promise<Category> {
        const category = this.create(createDto);
        return await this.save(category);
    }

    async getCategoryById(categoryId: string): Promise<Category> {
        const getCategory = await this.findOneBy({ id: categoryId });
        return getCategory;
    }
}
