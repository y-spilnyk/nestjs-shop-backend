import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fridge } from "./fridge.entity";
import { FridgeRepository } from "./fridge.repository";
import { FridgeFilterDto } from "./dto/get-fridge-filter.dto";
import { CreateFridgeDto } from "./dto/create-fridge.dto";

@Injectable()
export class FridgeService {
    constructor(
        @InjectRepository(FridgeRepository)
        private fridgeRepository: FridgeRepository
    ) {}

    async getFridge(filterDto: FridgeFilterDto): Promise<Fridge[]> {
        return await this.fridgeRepository.getFridge(filterDto);
    }

    async createFridge(createDto: CreateFridgeDto): Promise<Fridge> {
        return await this.fridgeRepository.createFridge(createDto);
    }
}
