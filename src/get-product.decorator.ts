import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Product } from "./products/products.entity";

export const GetProduct = createParamDecorator((_data, ctx: ExecutionContext): Product => {
    const request = ctx.switchToHttp().getRequest();
    return request.product;
});
