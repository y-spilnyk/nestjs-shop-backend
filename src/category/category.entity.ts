import { Product } from "src/products/products.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity({ name: "categories" })
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    title: string;

    @Column("text", { nullable: true })
    description: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
