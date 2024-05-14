import { Entity, JoinTable, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Phones } from "./products-phones/phones.entity"
import { User } from 'src/auth/user.entity'

@Entity()
export class Products {

    @PrimaryColumn()
    id: string;

    @OneToOne(() => User, user => user.products)
    @JoinTable()
    user: User

    @ManyToOne(() => Phones, phones => phones.product)
    @JoinTable()
    phones: Phones[];
}