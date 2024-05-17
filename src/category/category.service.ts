import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Phone } from "./entity/phone/phone.entity";
import { PhoneFilterDto } from "./dto/phone/get-phone-filter.dto";
import { CreatePhoneDto } from "./dto/phone/create-phone.dto";
import { FridgeFilterDto } from "./dto/fridge/get-fridge-filter.dto";
import { CreateFridgeDto } from "./dto/fridge/create-fridge.dto";
import { Fridge } from "./entity/fridge/fridge.entity";
import { FridgeRepository } from "./repository/fridge/fridge.repository";
import { PhoneRepository } from "./repository/phone/photo.repository";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(FridgeRepository)
        private fridgeRepository: FridgeRepository,
        @InjectRepository(PhoneRepository)
        private phoneRepository: PhoneRepository
    ) {}

    async getFridge(filterDto: FridgeFilterDto): Promise<Fridge[]> {
        return await this.fridgeRepository.getFridge(filterDto);
    }

    async createFridge(createDto: CreateFridgeDto): Promise<Fridge> {
        return await this.fridgeRepository.createFridge(createDto);
    }

    async getPhones(filterDto: PhoneFilterDto): Promise<Phone[]> {
        return this.phoneRepository.getPhones(filterDto);
    }

    async addPhone(createDto: CreatePhoneDto): Promise<Phone> {
        return await this.phoneRepository.addPhone(createDto);
    }
}
