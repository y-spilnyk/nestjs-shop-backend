import { Module } from "@nestjs/common";
import { PhonesService } from "./phones.service";
import { PhonesRepository } from "./phones.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhonesController } from "./phones.controller"

@Module({
    imports: [TypeOrmModule.forFeature([PhonesRepository])],
    controllers: [PhonesController],
    providers: [PhonesService, PhonesRepository]
})
export class PhoneModule {}