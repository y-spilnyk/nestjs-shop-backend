import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { FridgeRepository } from "./repository/fridge/fridge.repository";
import { PhoneRepository } from "./repository/phone/photo.repository";
import { Category } from "./category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoryController],
    providers: [CategoryService, FridgeRepository, PhoneRepository]
})
export class CategoryModule {}
