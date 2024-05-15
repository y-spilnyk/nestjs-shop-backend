import { EntityManager, Repository, SelectQueryBuilder } from "typeorm";
import { Fridge } from "./Fridge.entity";
import { Injectable } from "@nestjs/common";
import { ENDPOINTS } from "../../endpoints";
import { FridgeFilterDto } from "./dto/get-fridge-filter.dto";
import { CreateFridgeDto } from "./dto/create-fridge.dto";

@Injectable()
export class FridgeRepository extends Repository<Fridge> {
    constructor(private readonly eManager: EntityManager) {
        super(Fridge, eManager);
    }

    async getQuery(): Promise<SelectQueryBuilder<Fridge>> {
        return this.createQueryBuilder(ENDPOINTS.PRODUCT_FRIDGE);
    }

    async getFridge(filterDto: FridgeFilterDto): Promise<Fridge[]> {
        const userData = await this.getQuery();

        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            if (key) userData.andWhere(`${ENDPOINTS.PRODUCT_FRIDGE}.${key} = :value`, { value });
        });
        return await userData.getMany();
    }

    async createFridge(createFridgeDto: CreateFridgeDto): Promise<Fridge> {
        const { title, description, price, brand, capacity } = createFridgeDto;
        const createFridge = this.create({
            title,
            description,
            price,
            brand,
            capacity
        });
        await this.save(createFridge);
        return createFridge;
    }
}
