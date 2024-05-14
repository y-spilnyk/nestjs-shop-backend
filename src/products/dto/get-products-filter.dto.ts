
import { IsOptional, IsString } from "class-validator";
import { Phones } from "../products-phones/phones.entity"
import { Fridges } from "../products-fridges/fridges.entity"

export class ProductsFilterDto {
    @IsOptional()
    @IsString()
    phones: Phones[];

    @IsOptional()
    @IsString()
    fridges: Fridges[];
}
