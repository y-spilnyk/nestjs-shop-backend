import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export abstract class Products {
    @PrimaryGeneratedColumn()
    id: number;
}
