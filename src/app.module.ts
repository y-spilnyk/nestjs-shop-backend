import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { validationSchema } from "./config.schema";
import { ProductsModule } from "./pruducts/all-products/products.module"
import { Products } from "./pruducts/all-products/products.entity"
import { Phones } from "./pruducts/products-phones/phones.entity"
import { Fridges } from "./pruducts/products-fridges/fridges.entity"

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.stage.${process.env.STAGE}`,
            validationSchema: validationSchema
        }),
        ProductsModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
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
                    entities: [Products, Phones, Fridges]
                };
            }
        })
    ]
})
export class AppModule {}
