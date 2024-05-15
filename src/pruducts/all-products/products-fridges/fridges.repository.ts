import { EntityManager, Repository, SelectQueryBuilder } from "typeorm";
import { Fridges } from "./fridges.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { FridgesFilterDto } from "./dto/get-fridges-filter.dto";
import { ENDPOINTS } from "../../../endpoints";

@Injectable()
export class FridgesRepository extends Repository<Fridges> {
    constructor(private readonly eManager: EntityManager) {
        super(Fridges, eManager);
    }

    async getQuery(): Promise<SelectQueryBuilder<Fridges>> {
        return this.createQueryBuilder(ENDPOINTS.PRODUCT_FRIDGES);
    }

    async getFridges(filterDto: FridgesFilterDto): Promise<Fridges[]> {
        const userData = await this.getQuery();

        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            console.log("=== key ===", key);
            console.log("=== value ===", value);

            if (key) userData.andWhere(`${ENDPOINTS.PRODUCT_FRIDGES}.${key} = :value`, { value });
        });
        return await userData.getMany();
    }
}
