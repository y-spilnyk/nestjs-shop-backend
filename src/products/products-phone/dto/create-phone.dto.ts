import { IsNotEmpty, IsEnum } from "class-validator";
import { BatteryCapacity } from "../phone-battery.enum";

export class CreatePhoneDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    camera: string;

    @IsNotEmpty()
    @IsEnum(BatteryCapacity)
    battery: BatteryCapacity;
}
