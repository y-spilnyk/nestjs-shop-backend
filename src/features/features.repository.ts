import { EntityManager, Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Feature } from "./features.entity";
import { CreateFeaturesDto } from "./dto/create-features.dto";

@Injectable()
export class FeaturesRepository extends Repository<Feature> {
    constructor(private readonly entityManager: EntityManager) {
        super(Feature, entityManager);
    }

    async getAllFeatures(): Promise<Feature[]> {
        const getFeatures = await this.createQueryBuilder("features").getMany();
        if (!getFeatures) throw new NotFoundException();
        return getFeatures;
    }

    async getFeatureIdByValue(featureId: string): Promise<Feature> {
        const getFeatureId = await this.findOneBy({ id: featureId });
        if (!getFeatureId) throw new NotFoundException();
        return getFeatureId;
    }

    async createFeature(data: CreateFeaturesDto): Promise<Feature> {
        const createFeature = this.create(data);
        return await this.save(createFeature);
    }
}
