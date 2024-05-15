import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { Phone } from "./phone.entity";
import { ENDPOINTS } from "../../endpoints";
import { CreatePhoneDto } from "./dto/create-phone.dto";
import { PhoneService } from "./phone.service"
import { PhoneFilterDto } from "./dto/get-phone-filter.dto"

@Controller(ENDPOINTS.PRODUCTS_PHONE)
export class PhoneController {
    constructor(private phoneService: PhoneService) {}

    @Get()
    getPhones(@Query() filterDto: PhoneFilterDto): Promise<Phone[]> {
        return this.phoneService.getPhones(filterDto);
    }

    @Post()
    addPhone(@Body() createDto: CreatePhoneDto): Promise<Phone> {
        return this.phoneService.addPhone(createDto);
    }
}
