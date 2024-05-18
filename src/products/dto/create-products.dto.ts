import { IsNotEmpty, IsEnum, IsEmpty, IsOptional } from "class-validator";

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

    // categoryId: number;
}
