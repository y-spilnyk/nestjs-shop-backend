import { Injectable } from "@nestjs/common";
import { CreatePhoneDto } from "./dto/create-phone.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Phone } from "./phone.entity";
import { PhoneRepository } from "./phone.repository"
import { PhoneFilterDto } from "./dto/get-phone-filter.dto"

@Injectable()
export class PhoneService {
    constructor(
        @InjectRepository(PhoneRepository)
        private phoneRepository: PhoneRepository
    ) {}

    async getPhones(filterDto: PhoneFilterDto): Promise<Phone[]> {
        return this.phoneRepository.getPhones(filterDto);
    }

    async addPhone(createDto: CreatePhoneDto): Promise<Phone> {
        return await this.phoneRepository.addPhone(createDto);
    }
}
