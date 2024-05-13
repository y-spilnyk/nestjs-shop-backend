import { PhonesRepository } from "./phones.repository";
import { Phones } from "./phones.entity";
import { PhonesFilterDto } from "./dto/get-Phones-filter.dto";
export declare class PhonesService {
    private tasksRepository;
    constructor(tasksRepository: PhonesRepository);
    getPhones(filterDto: PhonesFilterDto): Promise<Phones[]>;
}
