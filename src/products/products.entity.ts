import { Category } from "src/category/category.entity";
import { Feature } from "src/features/features.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => Category, (category) => category.products, { eager: false })
    category: Category;

    @ManyToMany(() => Feature, (feature) => feature.products, { eager: false })
    @JoinTable()
    features: Feature[];
}
