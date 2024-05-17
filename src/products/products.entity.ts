import { Category } from "src/category/category.entity";
import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Category, (category) => category.products, { eager: true })
    category: Category[];
}
