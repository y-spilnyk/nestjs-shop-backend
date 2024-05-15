import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "../all-products/products.entity";
import { FridgeType } from "../products-fridge/fridge.enum";

@Entity()
export class Fridge {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    type: FridgeType;

    @OneToMany(() => Products, (product) => product.fridge)
    product: Products[];
}
