import { DataSource, Repository, SelectQueryBuilder } from "typeorm";
import { Phone } from "./phone.entity";
import { Injectable } from "@nestjs/common";
import { ENDPOINTS } from "../../endpoints";
import { CreatePhoneDto } from "./dto/create-phone.dto";
import { PhoneFilterDto } from "./dto/get-phone-filter.dto"

@Injectable()
export class PhoneRepository extends Repository<Phone> {
    constructor(private readonly dataSource: DataSource) {
        super(Phone, dataSource.createEntityManager());
    }

    async getQuery(): Promise<SelectQueryBuilder<Phone>> {
        return this.createQueryBuilder(ENDPOINTS.PRODUCTS_PHONE);
    }

    async getPhones(filterDto: PhoneFilterDto): Promise<Phone[]> {
        const userData = await this.getQuery();

        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            if (key) userData.andWhere(`${ENDPOINTS.PRODUCTS_PHONE}.${key} = :value`, { value });
        });
        return await userData.getMany();
    }

    async addPhone(createDto: CreatePhoneDto): Promise<Phone> {
        const { title, camera, battery } = createDto;
        const createPhone = this.create({
            title,
            camera,
            battery
        });
        await this.save(createPhone);
        return createPhone;
    }
}
