import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
    (data, [root, args, ctx, info]) => ctx.request.user,
);
