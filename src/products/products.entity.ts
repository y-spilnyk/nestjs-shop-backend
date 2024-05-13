import { Entity, OneToMany } from "typeorm";
import { Phones } from "./products-phones/phones.entity"

@Entity()
export class Products {

    @OneToMany(() => Phones, phone => phone.product)
    phones: Phones[];
}