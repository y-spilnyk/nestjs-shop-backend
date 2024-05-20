import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { FeaturesService } from "./features.service";
import { Feature } from "./features.entity";
import { CreateFeaturesDto } from "./dto/create-features.dto";

@Controller("features")
export class FeaturesController {
    constructor(private featuresService: FeaturesService) {}

    @Get()
    getAllFeatures(): Promise<Feature[]> {
        return this.featuresService.getAllFeatures();
    }

    @Get("/:id/values")
    getFeatureIdByValue(@Param('id') featureId: string): Promise<Feature> {
        return this.featuresService.getFeatureIdByValue(featureId);
    }

    @Post()
    createFeature(@Body() createDto: CreateFeaturesDto): Promise<Feature> {
        return this.featuresService.createFeature(createDto);
    }
}
