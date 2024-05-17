import { Products } from "src/products/products.entity";
import { Entity, Column, PrimaryGeneratedColumn, TableInheritance, ManyToOne } from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    title: string;

    @Column("text", { nullable: true })
    description: string;

    @Column("int", { nullable: true })
    price: number;

    @ManyToOne(() => Products, (products) => products.category)
    products: Products;
}
