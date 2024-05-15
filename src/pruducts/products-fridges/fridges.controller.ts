import { Controller, Get, Query } from "@nestjs/common";
import { FridgesService } from "./fridges.service";
import { Fridges } from "./fridges.entity";
import { ENDPOINTS } from "../../endpoints";
import { FridgesFilterDto } from "./dto/get-fridges-filter.dto";

@Controller(ENDPOINTS.PRODUCT_FRIDGES)
export class FridgesController {
    constructor(private fridgesService: FridgesService) {}

    @Get()
    getPhones(@Query() filterDto: FridgesFilterDto): Promise<Fridges[]> {
        return this.fridgesService.getFridges(filterDto);
    }
}
