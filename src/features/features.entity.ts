import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "features" })
export class Feature {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    title: string;

    @Column("text", { array: true, default: "{}" })
    values: string[];

    @OneToMany(() => Feature, (feature) => feature.products)
    products: Feature[];
}
