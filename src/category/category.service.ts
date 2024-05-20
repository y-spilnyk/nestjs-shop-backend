import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryDto } from "./dto/category.dto";
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

    async getCategoryById(categoryId: string): Promise<Category> {
        return await this.categoryRepository.getCategoryById(categoryId);
    }

    async createCategory(data: CategoryDto): Promise<Category> {
        return await this.categoryRepository.createCategory(data);
    }
}
