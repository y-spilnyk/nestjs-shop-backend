import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FridgesType } from "./fridges.enum";
import { Products } from "../all-products/products.entity"

@Entity()
export class Fridges {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    type: FridgesType;

    @OneToMany(() => Products, product => product.fridges)
    product: Products[];
}
