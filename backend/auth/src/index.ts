import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from '@backend/users';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { Resolvers } from '@backend/auth/src/resolvers';
import { AuthService } from './services/auth.service';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { RegisteredUserSaga } from './events/sagas/registered-user.saga';
import { RegisteredUserEvent } from './events/registered-user.event';
import { RegisteredUserHandler } from './commands/handlers/RegisteredUserHandler';

export const EventHandlers =  [RegisteredUserHandler];

@Module({
    imports: [
        forwardRef(() => UsersModule),
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: process.env.SECRETKEY || 'DEV_KEY',
            signOptions: {
                expiresIn: process.env.EXPIRESIN || '12h',
            },
        }),
        CqrsModule,
    ],
    providers: [
        AuthService,
        JwtStrategy,
        ...Resolvers,
        ...CommandHandlers,
        ...EventHandlers,
        RegisteredUserSaga,
    ],
    exports: [
        AuthService,
        PassportModule,
        JwtModule,
    ],
})
export class AuthModule {}
