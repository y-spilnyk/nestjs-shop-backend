import { IsNotEmpty } from "class-validator";
import { Category } from "src/category/category.entity";
import { Feature } from "src/features/features.entity";
import { Column, Entity, ManyToOne, ManyToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm";

@Entity({ name: "products" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column()
    title: string;

    @IsNotEmpty()
    @Column()
    description: string;

    @Column({ nullable: true })
    brand: string;

    @Column({ nullable: true })
    capacity: number;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @ManyToMany(() => Feature, { cascade: true })
    @JoinTable({ name: "product_features" })
    feature: Feature;
}
