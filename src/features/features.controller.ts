import { Controller, Get } from "@nestjs/common";
import { FeaturesService } from "./features.service";
import { Features } from "./features.entity"

@Controller("features")
export class FeaturesController {
    constructor(private featuresService: FeaturesService) {}

    @Get()
    getAllProducts(): Promise<Features[]> {
        return this.featuresService.getAllFeatures();
    }
}
