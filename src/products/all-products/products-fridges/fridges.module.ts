import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FridgesService } from "./fridges.service";
import { FridgesController } from "./fridges.controller"
import { FridgesRepository } from "./fridges.repository"

@Module({
    imports: [TypeOrmModule.forFeature([FridgesRepository])],
    controllers: [FridgesController],
    providers: [FridgesService, FridgesRepository]
})
export class FridgesModule {}