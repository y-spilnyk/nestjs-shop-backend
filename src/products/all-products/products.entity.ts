import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fridge } from "../products-fridge/fridge.entity";
import { Phones } from "../products-phones/phones.entity"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Phones, (phones) => phones.product, { eager: true })
    phones: Phones[];

    @ManyToOne(() => Fridge, (fridge) => fridge.product)
    fridge: Fridge[];
}
