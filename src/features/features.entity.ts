import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "features" })
export class Feature {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    title: string;

    @Column("text", { array: true, default: "{}" })
    values: string[];

    @ManyToMany(() => Feature, (feature) => feature.products)
    // @JoinTable({
    //     name: "product_features",
    //     joinColumn: {
    //         name: "feature_id",
    //         referencedColumnName: "id"
    //     },
    //     inverseJoinColumn: {
    //         name: "product_id",
    //         referencedColumnName: "id"
    //     }
    // })
    products: Feature[];
}
