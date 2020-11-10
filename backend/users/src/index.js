"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const cqrs_1 = require("@nestjs/cqrs");
const resolvers_1 = require("./resolvers");
const users_service_1 = require("./services/users.service");
const src_1 = require("@backend/auth/src");
const auth_middleware_1 = require("@backend/auth/src/middleware/auth.middleware");
const handlers_1 = require("./commands/handlers");
const entities_2 = require("@backend/roles/src/entities");
let UsersModule = class UsersModule {
    configure(consumer) {
        consumer.apply(auth_middleware_1.AuthMiddleware).forRoutes({ path: '/graphql', method: common_1.RequestMethod.ALL });
    }
};
UsersModule = __decorate([
    common_1.Module({
        imports: [
            common_1.forwardRef(() => src_1.AuthModule),
            typeorm_1.TypeOrmModule.forFeature([
                entities_1.User,
                entities_1.Profile,
                entities_2.Role,
            ]),
            cqrs_1.CqrsModule,
        ],
        providers: [
            users_service_1.UsersService,
            ...resolvers_1.Resolvers,
            ...handlers_1.CommandHandlers,
        ],
        exports: [
            users_service_1.UsersService,
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
