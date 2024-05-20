import { IsNotEmpty, IsOptional } from "class-validator";

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

    @IsOptional()
    @IsNotEmpty()
    categoryId: string;

    @IsOptional()
    @IsNotEmpty()
    featureId: string;
}
