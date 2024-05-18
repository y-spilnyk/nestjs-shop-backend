import { IsOptional, ValidateNested } from "class-validator";

export class CategoriesFilterDto {
    @IsOptional()
    @ValidateNested()
    id: number;
}
