import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UsersService } from '@backend/users/src/services/users.service';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AccessGuard extends AuthGuard('jwt') implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
    ) {
        super();
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const request = ctx.getContext().request;
        const withAuthAccess = this.reflector.get<boolean>('AuthAccess', context.getHandler());
        if (withAuthAccess) {
            if (!request.user) {
                throw new ForbiddenException('Unauthorised');
            }
            return !!request.user;
        }
        return true;
    }
}
