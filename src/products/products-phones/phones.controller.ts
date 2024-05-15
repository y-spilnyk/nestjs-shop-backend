import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PhonesService } from "./phones.service";
import { PhonesFilterDto } from "./dto/get-phones-filter.dto";
import { Phones } from "./phones.entity";
import { ENDPOINTS } from "../../endpoints";
import { CreatePhoneDto } from "./dto/create-phone.dto"

@Controller(ENDPOINTS.PRODUCTS_PHONE)
export class PhonesController {
    constructor(private phoneService: PhonesService) {}

    @Get()
    getPhones(@Query() filterDto: PhonesFilterDto): Promise<Phones[]> {
        return this.phoneService.getPhones(filterDto);
    }

    @Post()
    addPhone(@Body() createDto: CreatePhoneDto): Promise<Phones> {
        return this.phoneService.addPhone(createDto);
    }
}
