import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryDto } from "./dto/category.dto";
import { Category } from "./category.entity";

@Controller("categories")
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    getCategories(): Promise<Category[]> {
        return this.categoryService.getCategories();
    }

    @Get("/:id/product")
    getCategoryById(@Param("id") categoryId: string): Promise<Category> {
        return this.categoryService.getCategoryById(categoryId);
    }

    @Post()
    createCategory(@Body() createDto: CategoryDto): Promise<Category> {
        return this.categoryService.createCategory(createDto);
    }
}
