import { ChildEntity, Column } from "typeorm";
import { BatteryCapacity } from "src/category/enum/phone/phone-battery.enum";
import { Category } from "src/category/category.entity";

@ChildEntity()
export class Phone extends Category {
    @Column()
    camera: string;

    @Column()
    battery: BatteryCapacity;
}
