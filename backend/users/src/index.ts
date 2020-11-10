import { forwardRef, Inject, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Profile } from './entities';
import { CqrsModule } from '@nestjs/cqrs';
import { Resolvers } from './resolvers';
import { UsersService } from './services/users.service';
import { AuthModule } from '@backend/auth/src';
import { AuthMiddleware } from '@backend/auth/src/middleware/auth.middleware';
import { CommandHandlers } from './commands/handlers';
import { Role } from '@backend/roles/src/entities';

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([
            User,
            Profile,
            Role,
        ]),
        CqrsModule,
    ],
    providers: [
        UsersService,
        ...Resolvers,
        ...CommandHandlers,
    ],
    exports: [
        UsersService,
    ],
})
export class UsersModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(
        {path: '/graphql', method: RequestMethod.ALL},
        );
    }
}
