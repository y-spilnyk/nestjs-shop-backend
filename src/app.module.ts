import { FeaturesModule } from "./features/features.module";
import { CategoryModule } from "./category/category.module";
import { ProductsModule } from "./products/products.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { validationSchema } from "./config.schema";
import { Product } from "./products/products.entity";
import { Feature } from "./features/features.entity";
import { Category } from "./category/category.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.stage.${process.env.STAGE}`,
            validationSchema: validationSchema
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule, CategoryModule, ProductsModule, FeaturesModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const isProduction: boolean = configService.get("STAGE") === "prod";
                return {
                    ssl: isProduction,
                    extra: {
                        ssl: isProduction ? { rejectUnauthorized: false } : null
                    },
                    type: "postgres",
                    host: process.env.DATABASE_HOST || process.env.POSTGRES_HOST,
                    port: parseInt(process.env.DATABASE_PORT),
                    username: process.env.USERNAME || process.env.POSTGRES_USER,
                    password: process.env.PASSWORD || process.env.POSTGRES_PASSWORD,
                    database: process.env.DATABASE_NAME || process.env.POSTGRES_DATABASE,
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [Product, Category, Feature]
                };
            }
        })
    ]
})
export class AppModule {}
