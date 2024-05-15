import { ChildEntity, Column } from "typeorm";
import { Products } from "../all-products/products.entity";
import { FridgeBrand } from "../products-fridge/fridge.enum";
import { ENDPOINTS } from "src/endpoints"

@ChildEntity({ name: ENDPOINTS.PRODUCT_FRIDGE })
export class Fridge  extends Products{
    @Column("text")
    title: string;

    @Column("text")
    description: string;

    @Column("int")
    price: number;

    @Column()
    brand: FridgeBrand;

    @Column("int")
    capacity: number;
}
