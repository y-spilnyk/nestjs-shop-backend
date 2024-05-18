import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeaturesRepository } from "./features.repository";
import { Features } from "./features.entity"

@Injectable()
export class FeaturesService {
    constructor(
        @InjectRepository(FeaturesRepository)
        private featuresRepository: FeaturesRepository
    ) {}

    async getAllFeatures(): Promise<Features[]> {
        return await this.featuresRepository.getAllFeatures();
    }
}
