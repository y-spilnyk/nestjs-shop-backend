import { Module } from "@nestjs/common";
import { TasksModule } from "./phones/phones.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./auth/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { validationSchema } from "./config.schema";
import { Phones } from "./phones/phones.entity"

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.stage.${process.env.STAGE}`,
            validationSchema: validationSchema
        }),
        TasksModule,
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
                    entities: [User, Phones]
                };
            }
        }),
    ]
})
export class AppModule {}
