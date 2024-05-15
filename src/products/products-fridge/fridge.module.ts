import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FridgeController } from "./fridge.controller";
import { FridgeRepository } from "./fridge.repository";
import { FridgeService } from "./fridges.service"

@Module({
    imports: [TypeOrmModule.forFeature([FridgeRepository])],
    controllers: [FridgeController],
    providers: [FridgeService, FridgeRepository]
})
export class FridgeModule {}
