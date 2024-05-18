import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Features {
    @PrimaryGeneratedColumn()
    id: number;
}
