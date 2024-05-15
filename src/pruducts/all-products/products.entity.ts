import { Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Phones } from "./products-phones/phones.entity"
import { Fridges } from './products-fridges/fridges.entity'

@Entity()
export class Products {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Phones, phones => phones.product)
    @JoinTable()
    phones: Phones[];

    @ManyToOne(() => Fridges, fridges => fridges.product)
    @JoinTable()
    fridges: Fridges[];
}