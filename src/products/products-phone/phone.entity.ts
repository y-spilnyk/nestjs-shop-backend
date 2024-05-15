import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BatteryCapacity } from "./phone-battery.enum";
import { Products } from "../all-products/products.entity";
import { ENDPOINTS } from "src/endpoints";

@Entity({ name: ENDPOINTS.PRODUCTS_PHONE })
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
