import { EntityManager, Repository, SelectQueryBuilder } from "typeorm"
import { Phones } from "./phones.entity"
import { Injectable, NotFoundException } from "@nestjs/common"
import { PhonesFilterDto } from "./dto/get-Phones-filter.dto"
import { User } from "../auth/user.entity"

@Injectable()
export class PhonesRepository extends Repository<Phones> {
    constructor(private readonly eManager: EntityManager) {
        super(Phones, eManager)
    }

    async verifyIfUserHasRights(user: User): Promise<SelectQueryBuilder<Phones>> {
        return this.createQueryBuilder("phones").where({ user })
    }

    async getQuery(): Promise<SelectQueryBuilder<Phones>> {
        return this.createQueryBuilder("phones")
    }

    async getPhones(filterDto: PhonesFilterDto): Promise<Phones[]> {
        const userData = await this.getQuery()
        
        Object.keys(filterDto).forEach((key) => {
            const value = filterDto[key];
            console.log('=== key ===', key);
            console.log('=== value ===', value)
    
            if (key) userData.andWhere(`phones.${key} = :value`, { value });
        })
        return await userData.getMany()
    }
}