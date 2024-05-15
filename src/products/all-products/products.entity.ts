import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Phones } from "../products-phones/phones.entity";
import { Fridges } from "../products-fridges/products";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Phones, (phones) => phones.product, {
        cascade: true,
        nullable: true
    })
    phones: Phones[];

    @ManyToOne(() => Fridges, (fridges) => fridges.product, {
        cascade: true,
        nullable: true
    })
    fridges: Fridges[];
}
