import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Category } from "./category.entity";

export const GetCategory = createParamDecorator((_data, ctx: ExecutionContext): Category => {
    const request = ctx.switchToHttp().getRequest();
    return request.category;
});
