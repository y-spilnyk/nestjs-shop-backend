import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fridge } from "../products-fridge/fridge.entity";
import { Phone } from "../products-phone/phone.entity";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Phone, (phone) => phone.product)
    phone: Phone[];

    @ManyToOne(() => Fridge, (fridge) => fridge.product)
    fridge: Fridge[];
}
