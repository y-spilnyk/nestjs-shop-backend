import { FeaturesService } from "./features.service";
import { FeaturesController } from "./features.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Feature } from "./features.entity";
import { FeaturesRepository } from "./features.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Feature])],
    controllers: [FeaturesController],
    providers: [FeaturesService, FeaturesRepository]
})
export class FeaturesModule {}
