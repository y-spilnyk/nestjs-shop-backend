import { Controller, Get, Query } from "@nestjs/common";
import { Fridge } from "./fridge.entity";
import { ENDPOINTS } from "../../endpoints";
import { FridgeService } from './fridges.service';
import { FridgeFilterDto } from "./dto/get-fridges-filter.dto"

@Controller(ENDPOINTS.PRODUCT_FRIDGE)
export class FridgeController {
    constructor(private fridgeService: FridgeService) {}

    @Get()
    getPhones(@Query() filterDto: FridgeFilterDto): Promise<Fridge[]> {
        return this.fridgeService.getFridge(filterDto);
    }
}
