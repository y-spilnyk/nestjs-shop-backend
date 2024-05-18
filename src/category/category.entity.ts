import { Entity, Column, PrimaryGeneratedColumn, TableInheritance, ManyToOne } from "typeorm";

@Entity({
    name: "categories"
})
@TableInheritance({ column: { type: "varchar", name: "type" } })
export abstract class Category {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("text")
    title: string;

    @Column("text", {
        unique: true
    })
    handle: string;

    @Column("text", { nullable: true })
    description: string;

    // @ManyToOne(() => Product, (products) => products.category, { eager: false })
    // @Exclude({ toPlainOnly: true })
    // products: Product;
}
