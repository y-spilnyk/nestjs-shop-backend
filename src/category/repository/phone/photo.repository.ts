import { DataSource, Repository, SelectQueryBuilder } from "typeorm";
import { Injectable } from "@nestjs/common";
import { Phone } from "src/category/entity/phone/phone.entity";
import { PhoneFilterDto } from "src/category/dto/phone/get-phone-filter.dto";
import { CreatePhoneDto } from "src/category/dto/phone/create-phone.dto";

@Injectable()
export class PhoneRepository extends Repository<Phone> {
    constructor(private readonly dataSource: DataSource) {
        super(Phone, dataSource.createEntityManager());
    }

    async getQuery(): Promise<SelectQueryBuilder<Phone>> {
        return this.createQueryBuilder("category");
    }

    async getPhones(filterDto: PhoneFilterDto): Promise<Phone[]> {
        const userData = await this.getQuery();

        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            if (key) userData.andWhere(`category.phone.${key} = :value`, { value });
        });
        return await userData.getMany();
    }

    async addPhone(createDto: CreatePhoneDto): Promise<Phone> {
        const createPhone = this.create(createDto);
        await this.save(createPhone);
        return createPhone;
    }
}
