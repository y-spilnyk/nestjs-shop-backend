import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BatteryCapacity } from "./phone-battery.enum";
import { Products } from "../all-products/products.entity";

@Entity({ name: "products/phone" })
export class Phone {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    camera: string;

    @Column()
    battery: BatteryCapacity;

    @OneToMany(() => Products, (product) => product.phone)
    product: Products[];
}
