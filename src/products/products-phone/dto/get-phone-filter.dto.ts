import { IsEnum, IsOptional, IsString } from "class-validator";
import { BatteryCapacity } from "../phone-battery.enum";

export class PhoneFilterDto {
    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsEnum(BatteryCapacity)
    battery: BatteryCapacity;

    @IsOptional()
    @IsString()
    camera: string;
}
