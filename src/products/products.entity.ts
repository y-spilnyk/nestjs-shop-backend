import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'products'
})
export class Product {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ nullable: true })
    title: string;

    @Column({ nullable: true })
    description: string;

    // @OneToMany(() => Category, (category) => category.products, { eager: true })
    // category: Category[];
}
