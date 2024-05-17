import { Entity, Column, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

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
}
