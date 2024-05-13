import { Phones } from '../phones/phones.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Phones, phones => phones.users)
    phones: Phones[];
}   