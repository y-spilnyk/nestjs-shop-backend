import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesFilterDto } from "./dto/categories.filter.dto";
import { Category } from "./category.entity";
import { CategoryRepository } from "./category.repository";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository
    ) {}

    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.getCategories();
    }

    async getCategoryById(filterDto: CategoriesFilterDto): Promise<Category[]> {
        return await this.categoryRepository.getCategoryById(filterDto);
    }
}
