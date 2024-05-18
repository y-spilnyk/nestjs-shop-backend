import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoriesFilterDto } from "./dto/categories.filter.dto";
import { Category } from "./category.entity";

@Controller("categories")
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    getCategories(): Promise<Category[]> {
        return this.categoryService.getCategories();
    }

    @Get("/:id/product")
    getCategoryById(@Query() filterDto: CategoriesFilterDto): Promise<Category[]> {
        return this.categoryService.getCategoryById(filterDto);
    }
}
