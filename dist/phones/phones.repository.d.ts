import { EntityManager, Repository, SelectQueryBuilder } from "typeorm";
import { Phones } from "./phones.entity";
import { PhonesFilterDto } from "./dto/get-Phones-filter.dto";
import { User } from "../auth/user.entity";
export declare class PhonesRepository extends Repository<Phones> {
    private readonly eManager;
    constructor(eManager: EntityManager);
    verifyIfUserHasRights(user: User): Promise<SelectQueryBuilder<Phones>>;
    getQuery(): Promise<SelectQueryBuilder<Phones>>;
    getPhones(filterDto: PhonesFilterDto): Promise<Phones[]>;
}
