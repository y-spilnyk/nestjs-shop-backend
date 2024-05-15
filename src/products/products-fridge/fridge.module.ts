import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FridgeController } from "./fridge.controller";
import { FridgeRepository } from "./fridge.repository";
import { Fridge } from "./fridge.entity";
import { FridgeService } from "./fridge.service";

@Module({
    imports: [TypeOrmModule.forFeature([Fridge])],
    controllers: [FridgeController],
    providers: [FridgeService, FridgeRepository]
})
export class FridgeModule {}
