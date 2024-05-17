import { IsNotEmpty, IsEnum, IsOptional } from "class-validator";
import { FridgeBrand } from "src/category/enum/fridge/fridge.enum";
import { Generated } from "typeorm";

export class CreateFridgeDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsEnum(FridgeBrand)
    brand: FridgeBrand;

    @IsNotEmpty()
    capacity: number;

    @IsNotEmpty()
    price: number;
}
