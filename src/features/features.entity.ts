import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "features" })
export class Feature {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    title: string;

    @Column("text", { array: true, default: "{}" })
    values: string[];
}
