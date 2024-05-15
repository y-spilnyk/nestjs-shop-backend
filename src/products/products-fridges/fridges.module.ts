import { Module } from "@nestjs/common";
import { FridgesService } from "./fridges.service";
import { FridgesRepository } from "./fridges.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FridgesController } from "./fridges.controller"

@Module({
    imports: [TypeOrmModule.forFeature([FridgesRepository])],
    controllers: [FridgesController],
    providers: [FridgesService, FridgesRepository]
})
export class FridgesModule {}