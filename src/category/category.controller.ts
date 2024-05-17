import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { FridgeFilterDto } from "./dto/fridge/get-fridge-filter.dto";
import { CreateFridgeDto } from "./dto/fridge/create-fridge.dto";
import { PhoneFilterDto } from "./dto/phone/get-phone-filter.dto";
import { Phone } from "./entity/phone/phone.entity";
import { CreatePhoneDto } from "./dto/phone/create-phone.dto";
import { Fridge } from "./entity/fridge/fridge.entity";

@Controller("category")
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get("/fridge")
    getFridge(@Query() filterDto: FridgeFilterDto): Promise<Fridge[]> {
        return this.categoryService.getFridge(filterDto);
    }

    @Post("/fridge")
    createFridge(@Body() createDto: CreateFridgeDto): Promise<Fridge> {
        return this.categoryService.createFridge(createDto);
    }

    @Get("/phone")
    getPhones(@Query() filterDto: PhoneFilterDto): Promise<Phone[]> {
        return this.categoryService.getPhones(filterDto);
    }

    @Post("/phone")
    addPhone(@Body() createDto: CreatePhoneDto): Promise<Phone> {
        return this.categoryService.addPhone(createDto);
    }
}
