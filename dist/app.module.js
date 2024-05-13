"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const phones_module_1 = require("./phones/phones.module");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./auth/user.entity");
const config_1 = require("@nestjs/config");
const config_schema_1 = require("./config.schema");
const phones_entity_1 = require("./phones/phones.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.env.stage.${process.env.STAGE}`,
                validationSchema: config_schema_1.validationSchema
            }),
            phones_module_1.TasksModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => {
                    const isProduction = configService.get("STAGE") === "prod";
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
                        entities: [user_entity_1.User, phones_entity_1.Phones]
                    };
                }
            }),
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map