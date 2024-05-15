import { IsEnum, IsOptional, IsString } from "class-validator";
import { BatteryCapacity } from "../phones-battery.enum";

export class PhonesFilterDto {
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
