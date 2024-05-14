import { Products } from "src/products/products.entity"
import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => Products, products => products.user)
    products: Products[];
}   