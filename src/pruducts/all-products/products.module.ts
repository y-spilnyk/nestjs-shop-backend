import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsRepository } from './products.repository'
import { ProductsService } from './products.service'
import { PhoneModule } from './products-phones/phones.module'
import { ProductsController } from './products.controller'
import { FridgesModule } from './products-fridges/fridges.module'

@Module({
    imports: [TypeOrmModule.forFeature([ProductsRepository]), PhoneModule, FridgesModule],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository]
})
export class ProductsModule {}