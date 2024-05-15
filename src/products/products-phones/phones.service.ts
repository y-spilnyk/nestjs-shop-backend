import { Injectable } from "@nestjs/common";
import { CreatePhoneDto } from "./dto/create-phone.dto";
import { PhonesRepository } from "./phones.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Phones } from "./phones.entity";
import { PhonesFilterDto } from "./dto/get-Phones-filter.dto";

@Injectable()
export class PhonesService {
    constructor(
        @InjectRepository(PhonesRepository)
        private phoneRepository: PhonesRepository
    ) {}

    async getPhones(filterDto: PhonesFilterDto): Promise<Phones[]> {
        return this.phoneRepository.getPhones(filterDto);
    }

    async addPhone(createDto: CreatePhoneDto): Promise<Phones> {
        return await this.phoneRepository.addPhone(createDto);
    }
}
