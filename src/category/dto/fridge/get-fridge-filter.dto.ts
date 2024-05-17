import { IsEnum, IsOptional, IsString } from "class-validator";
import { FridgeBrand } from "src/category/enum/fridge/fridge.enum"

export class FridgeFilterDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsEnum(FridgeBrand)
    brand: FridgeBrand;

    @IsOptional()
    capacity: number;
}
