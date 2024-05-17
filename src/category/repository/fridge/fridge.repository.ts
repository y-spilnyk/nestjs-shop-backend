import { DataSource, Repository, SelectQueryBuilder } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Fridge } from "src/category/entity/fridge/fridge.entity";
import { FridgeFilterDto } from "src/category/dto/fridge/get-fridge-filter.dto";
import { CreateFridgeDto } from "src/category/dto/fridge/create-fridge.dto";

@Injectable()
export class FridgeRepository extends Repository<Fridge> {
    constructor(private readonly dataSource: DataSource) {
        super(Fridge, dataSource.createEntityManager());
    }

    async getQuery(): Promise<SelectQueryBuilder<Fridge>> {
        return this.createQueryBuilder("fridge");
    }

    async getFridge(filterDto: FridgeFilterDto): Promise<Fridge[]> {
        const userData = await this.getQuery();

        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            if (key) userData.andWhere(`$category.fridge.${key} = :value`, { value });
        });
        return await userData.getMany();
    }

    async createFridge(createDto: CreateFridgeDto): Promise<Fridge> {
        const { title, description, price, brand, capacity } = createDto;
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
