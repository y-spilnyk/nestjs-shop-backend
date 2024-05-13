import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BatteryCapacity } from "./phones-battery.enum";
import { User } from "src/auth/user.entity"

@Entity()
export class Phones {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    camera: string;

    @Column()
    battery: BatteryCapacity;

    @ManyToMany(() => User, user => user.phones)
    @JoinTable()
    users: User[];
}
