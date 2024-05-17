import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Products } from "./products/products.entity"

export const GetProduct = createParamDecorator((_data, ctx: ExecutionContext): Products => {
    const request = ctx.switchToHttp().getRequest();
    return request.product;
});
