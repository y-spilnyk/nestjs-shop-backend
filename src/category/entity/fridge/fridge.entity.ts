import { Category } from "src/category/category.entity";
import { FridgeBrand } from "src/category/enum/fridge/fridge.enum";
import { Column, ChildEntity } from "typeorm";

@ChildEntity()
export class Fridge extends Category {
    @Column()
    brand: FridgeBrand;

    @Column("int")
    capacity: number;
}
