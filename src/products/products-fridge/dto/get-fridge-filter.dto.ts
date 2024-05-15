import { IsEnum, IsOptional, IsString } from "class-validator";
import { FridgeBrand } from "../fridge.enum";

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
