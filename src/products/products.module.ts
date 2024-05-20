import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsRepository } from "./products.repository";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { Product } from "./products.entity";
import { CategoryService } from "src/category/category.service";
import { CategoryRepository } from "src/category/category.repository";
import { FeaturesService } from "src/features/features.service";
import { FeaturesRepository } from "src/features/features.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductsController],
    providers: [
        ProductsService,
        ProductsRepository,
        CategoryService,
        CategoryRepository,
        FeaturesService,
        FeaturesRepository
    ]
})
export class ProductsModule {}
