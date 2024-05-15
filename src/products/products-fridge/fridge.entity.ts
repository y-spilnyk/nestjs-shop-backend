import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "../all-products/products.entity";
import { FridgeBrand } from "../products-fridge/fridge.enum";
import { ENDPOINTS } from "src/endpoints"

@Entity({ name: ENDPOINTS.PRODUCT_FRIDGE })
export class Fridge {
    @PrimaryGeneratedColumn()
    id: string;

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

    @OneToMany(() => Products, (product) => product.fridge)
    product: Products[];
}
