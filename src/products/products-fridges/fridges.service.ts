import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Fridges } from "./products"
import { FridgesRepository } from "./fridges.repository"
import { FridgesFilterDto } from "./dto/get-fridges-filter.dto"

@Injectable()
export class FridgesService {
    constructor(
        @InjectRepository(FridgesRepository)
        private fridgesRepository: FridgesRepository
    ) {}

    async getFridges(filterDto: FridgesFilterDto): Promise<Fridges[]> {
        return this.fridgesRepository.getFridges(filterDto);
    }

}
