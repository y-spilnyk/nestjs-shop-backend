import { Category } from "src/category/category.entity";
import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Category, (category) => category.products)
    @JoinColumn({name: "product_id"})  
    category: Category[];
}
