
import { IsOptional, IsString } from "class-validator";
import { Phones } from "../products-phones/phones.entity"

export class ProductsFilterDto {
    @IsOptional()
    @IsString()
    phones: Phones[];
}
