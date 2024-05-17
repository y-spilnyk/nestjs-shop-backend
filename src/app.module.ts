import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { validationSchema } from "./config.schema";
import { ProductsModule } from "./products/products.module";
import { Products } from "./products/products.entity";
import { Phone } from "./category/entity/phone/phone.entity";
import { Fridge } from "./category/entity/fridge/fridge.entity";
import { CategoryModule } from "./category/category.module"

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.stage.${process.env.STAGE}`,
            validationSchema: validationSchema
        }),
        ProductsModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule, CategoryModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => {
                const isProduction: boolean = configService.get("STAGE") === "prod";
                return {
                    ssl: isProduction,
                    extra: {
                        ssl: isProduction ? { rejectUnauthorized: false } : null
                    },
                    type: "postgres",
                    host: process.env.DATABASE_HOST,
                    port: parseInt(process.env.DATABASE_PORT),
                    username: process.env.USERNAME,
                    password: process.env.PASSWORD,
                    database: process.env.DATABASE_NAME,
                    autoLoadEntities: true,
                    synchronize: true,
                    entities: [Products, Phone, Fridge]
                };
            }
        })
    ]
})
export class AppModule {}
