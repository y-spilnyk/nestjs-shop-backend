import { PhonesService } from "./phones.service";
import { PhonesFilterDto } from "./dto/get-phones-filter.dto";
import { Phones } from "./phones.entity";
export declare class PhonesController {
    private tasksService;
    constructor(tasksService: PhonesService);
    getPhones(filterDto: PhonesFilterDto): Promise<Phones[]>;
}
