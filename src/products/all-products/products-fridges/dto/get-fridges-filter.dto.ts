import { IsEnum, IsOptional, IsString } from "class-validator";
import { FridgesType } from "../fridges.enum";

export class FridgesFilterDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsEnum(FridgesType)
    type: FridgesType;
}
