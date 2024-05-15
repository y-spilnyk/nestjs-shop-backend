import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PhoneController } from "./phone.controller"
import { Phone } from "./phone.entity"
import { PhoneService } from "./phone.service"
import { PhoneRepository } from "./phone.repository"

@Module({
    imports: [TypeOrmModule.forFeature([Phone])],
    controllers: [PhoneController],
    providers: [PhoneService, PhoneRepository]
})
export class PhoneModule {}
