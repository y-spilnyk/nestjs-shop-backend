import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FeaturesRepository } from "./features.repository";
import { Feature } from "./features.entity";
import { CreateFeaturesDto } from "./dto/create-features.dto";

@Injectable()
export class FeaturesService {
    constructor(
        @InjectRepository(FeaturesRepository)
        private featuresRepository: FeaturesRepository
    ) {}

    async getAllFeatures(): Promise<Feature[]> {
        return await this.featuresRepository.getAllFeatures();
    }

    async getFeatureIdByValue(featureId: string): Promise<Feature> {
        return await this.featuresRepository.getFeatureIdByValue(featureId);
    }

    async createFeature(createDto: CreateFeaturesDto): Promise<Feature> {
        return await this.featuresRepository.createFeature(createDto);
    }
    
}
