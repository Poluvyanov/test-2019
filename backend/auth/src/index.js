"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_1 = require("@backend/users");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const resolvers_1 = require("@backend/auth/src/resolvers");
const auth_service_1 = require("./services/auth.service");
const cqrs_1 = require("@nestjs/cqrs");
const handlers_1 = require("./commands/handlers");
const registered_user_saga_1 = require("./events/sagas/registered-user.saga");
const RegisteredUserHandler_1 = require("./commands/handlers/RegisteredUserHandler");
exports.EventHandlers = [RegisteredUserHandler_1.RegisteredUserHandler];
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => users_1.UsersModule),
            passport_1.PassportModule.register({
                defaultStrategy: 'jwt',
                property: 'user',
                session: false,
            }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRETKEY || 'DEV_KEY',
                signOptions: {
                    expiresIn: process.env.EXPIRESIN || '12h',
                },
            }),
            cqrs_1.CqrsModule,
        ],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            ...resolvers_1.Resolvers,
            ...handlers_1.CommandHandlers,
            ...exports.EventHandlers,
            registered_user_saga_1.RegisteredUserSaga,
        ],
        exports: [
            auth_service_1.AuthService,
            passport_1.PassportModule,
            jwt_1.JwtModule,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
