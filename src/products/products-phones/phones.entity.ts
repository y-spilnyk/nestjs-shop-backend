import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BatteryCapacity } from "./phones-battery.enum";
import { Products } from "../products.entity"

@Entity()
export class Phones {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    camera: string;

    @Column()
    battery: BatteryCapacity;

    @ManyToOne(() => Products, product => product.phones)
    product: Products[];
}
