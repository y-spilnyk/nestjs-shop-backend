import { DataSource, Repository, SelectQueryBuilder } from "typeorm";
import { Phones } from "./phones.entity";
import { Injectable } from "@nestjs/common";
import { PhonesFilterDto } from "./dto/get-Phones-filter.dto";
import { ENDPOINTS } from "../../endpoints";
import { CreatePhoneDto } from "./dto/create-phone.dto";

@Injectable()
export class PhonesRepository extends Repository<Phones> {
    constructor(private readonly dataSource: DataSource) {
        super(Phones, dataSource.createEntityManager());
    }

    async getQuery(): Promise<SelectQueryBuilder<Phones>> {
        return this.createQueryBuilder(ENDPOINTS.PRODUCTS_PHONE);
    }

    async getPhones(filterDto: PhonesFilterDto): Promise<Phones[]> {
        const userData = await this.getQuery();

        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            if (key) userData.andWhere(`${ENDPOINTS.PRODUCTS_PHONE}.${key} = :value`, { value });
        });
        return await userData.getMany();
    }

    async addPhone(createDto: CreatePhoneDto): Promise<Phones> {
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
