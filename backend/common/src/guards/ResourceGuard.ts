import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ResourceGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
    ) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const checkAccess = this.reflector.get('ResourceAccess', context.getHandler());
        if (checkAccess) {
            const ctx = GqlExecutionContext.create(context);
            const request = ctx.getContext().request;
            const user = request.user;
            if (user.role.name === checkAccess.possession.toLowerCase()
                && user.role.permissions.find(
                    u => u.resource === checkAccess.resource
                        && u.action === checkAccess.action)) {
                return true;
            }
            return false;
        }
        return true;
    }
}
