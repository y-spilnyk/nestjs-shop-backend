import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Phones } from "../products-phones/phones.entity";
import { Fridge } from "../products-fridge/fridge.entity";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Phones, (phones) => phones.product, {
        cascade: true,
        nullable: true
    })
    phones: Phones[];

    @ManyToOne(() => Fridge, (fridge) => fridge.product, {
        cascade: true,
        nullable: true
    })
    fridge: Fridge[];
}
