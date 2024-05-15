import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Products } from "../all-products/products.entity";
import { FridgeBrand } from "../products-fridge/fridge.enum";

@Entity()
export class Fridge {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    brand: FridgeBrand;

    @Column()
    capacity: number;

    @OneToMany(() => Products, (product) => product.fridge)
    product: Products[];
}
