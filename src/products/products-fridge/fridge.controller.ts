import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { Fridge } from "./fridge.entity";
import { ENDPOINTS } from "../../endpoints";
import { FridgeFilterDto } from "./dto/get-fridge-filter.dto";
import { CreateFridgeDto } from "./dto/create-fridge.dto";
import { FridgeService } from "./fridge.service";

@Controller(ENDPOINTS.PRODUCT_FRIDGE)
export class FridgeController {
    constructor(private fridgeService: FridgeService) {}

    @Get()
    getFridge(@Query() filterDto: FridgeFilterDto): Promise<Fridge[]> {
        return this.fridgeService.getFridge(filterDto);
    }

    @Post()
    createFridge(@Body() createFridgeDto: CreateFridgeDto): Promise<Fridge> {
        return this.fridgeService.createFridge(createFridgeDto);
    }
}
