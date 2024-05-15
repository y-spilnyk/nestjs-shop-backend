import { IsEnum, IsOptional, IsString } from "class-validator";
import { FridgeType } from "../fridge.enum";

export class FridgeFilterDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsEnum(FridgeType)
    type: FridgeType;
}
