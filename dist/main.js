"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const interceptor_1 = require("./interceptor");
const port = process.env.PORT;
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new interceptor_1.TransformInterceptor());
    await app.listen(port);
    logger.log(`App listening on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map