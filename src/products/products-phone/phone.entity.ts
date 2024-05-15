import { ChildEntity, Column } from "typeorm";
import { ENDPOINTS } from "src/endpoints";
import { Products } from "../all-products/products.entity";
import { BatteryCapacity } from "./phone-battery.enum"

@ChildEntity({ name: ENDPOINTS.PRODUCTS_PHONE })
export class Phone extends Products {
    @Column()
    title: string;

    @Column()
    camera: string;

    @Column()
    battery: BatteryCapacity;
}
