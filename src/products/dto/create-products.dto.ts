import { IsNotEmpty, IsOptional } from "class-validator";
import { Category } from "src/category/category.entity";
import { ManyToOne } from "typeorm";

export class CreateProductDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsOptional()
    brand: string;

    @IsNotEmpty()
    capacity: number;

    @IsNotEmpty()
    price: number;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
}
