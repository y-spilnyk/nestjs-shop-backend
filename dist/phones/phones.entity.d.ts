import { BatteryCapacity } from "./phones-battery.enum";
import { User } from "src/auth/user.entity";
export declare class Phones {
    id: string;
    title: string;
    camera: string;
    battery: BatteryCapacity;
    users: User[];
}
