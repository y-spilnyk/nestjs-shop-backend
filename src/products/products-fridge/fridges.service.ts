import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fridge } from "./fridge.entity";
import { FridgeRepository } from "./fridge.repository";
import { FridgeFilterDto } from "./dto/get-fridge-filter.dto";
import { CreateFridgeDto } from "./dto/create-fridge.dto";

@Injectable()
export class FridgeService {
    constructor(
        @InjectRepository(FridgeRepository)
        private fridgesRepository: FridgeRepository
    ) {}

    async getFridge(filterDto: FridgeFilterDto): Promise<Fridge[]> {
        return await this.fridgesRepository.getFridge(filterDto);
    }

    async createFridge(createFridgeDto: CreateFridgeDto): Promise<Fridge> {
        return await this.fridgesRepository.createFridge(createFridgeDto);
    }
}
