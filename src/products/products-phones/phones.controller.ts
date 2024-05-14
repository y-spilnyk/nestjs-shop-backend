import { Controller,Get, Query } from "@nestjs/common"
import { PhonesService } from "./phones.service"
import { PhonesFilterDto } from "./dto/get-phones-filter.dto"
import { Phones } from "./phones.entity"

@Controller('/products/phones')
export class PhonesController {
    constructor(private tasksService: PhonesService) {}

    @Get()
    getPhones(@Query() filterDto: PhonesFilterDto): Promise<Phones[]> {
        return this.tasksService.getPhones(filterDto)
    }
}