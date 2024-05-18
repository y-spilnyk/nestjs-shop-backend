import { EntityManager, Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Features } from "./features.entity";

@Injectable()
export class FeaturesRepository extends Repository<Features> {
    constructor(private readonly entityManager: EntityManager) {
        super(Features, entityManager);
    }

    async getAllFeatures(): Promise<Features[]> {
        try {
            const userData = await this.createQueryBuilder("features").getMany();
            return userData;
        } catch (error) {
            console.error("Error getting products:", error);
            throw error;
        }
    }
}
