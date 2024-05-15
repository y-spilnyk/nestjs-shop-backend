import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { PhoneModule } from "../products-phones/phones.module";
import { FridgeModule } from "../products-fridge/fridge.module";

@Module({
    imports: [TypeOrmModule.forFeature([ProductsRepository]), PhoneModule, FridgeModule],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository]
})
export class ProductsModule {}
