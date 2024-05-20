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
                    type: "mysql",
                    host: process.env.DATABASE_HOST || process.env.STACKHERO_MYSQL_HOST,
                    port: parseInt(process.env.DATABASE_PORT) || 3306,
                    username: process.env.USERNAME || 'root',
                    password: process.env.PASSWORD || process.env.STACKHERO_MYSQL_ROOT_PASSWORD,
                    database: process.env.DATABASE_NAME || 'root',
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [Product, Category, Feature]
                };
            }
        })
    ]
})
export class AppModule {}
