"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const users_1 = require("@backend/users");
const roles_1 = require("@backend/roles");
const core_1 = require("@nestjs/core");
const common_2 = require("@backend/common");
const graphql_iso_date_1 = require("graphql-iso-date");
const src_1 = require("@backend/auth/src");
let ApplicationModule = class ApplicationModule {
    configure(consumer) {
        // TODO: connect middleware here
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || '192.168.99.100',
                database: process.env.DB_NAME || 'test_2019',
                username: process.env.DB_USERNAME || 'raccoon',
                password: process.env.DB_PASSWORD || '12345678',
                port: +process.env.DB_PORT || 5436,
                entities: [
                    '../**/src/**/entities/**.ts',
                ],
                migrations: [
                    '../**/migrations/**.ts',
                ],
                migrationsRun: false,
                synchronize: true,
                logging: false,
            }),
            graphql_1.GraphQLModule.forRoot({
                path: '/graphql',
                typePaths: [
                    '../**/*.graphql',
                ],
                installSubscriptionHandlers: false,
                resolvers: {
                    Date: graphql_iso_date_1.GraphQLDate,
                    Time: graphql_iso_date_1.GraphQLTime,
                    DateTime: graphql_iso_date_1.GraphQLDateTime,
                },
                rootValue: ({ req }) => req,
                formatError: error => {
                    return error;
                },
                playground: true,
                context: ({ req }) => {
                    return {
                        request: req,
                    };
                },
            }),
            src_1.AuthModule,
            users_1.UsersModule,
            roles_1.RolesModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: common_2.AccessGuard,
                inject: [core_1.Reflector],
            },
            {
                provide: core_1.APP_GUARD,
                useClass: common_2.ResourceGuard,
                inject: [core_1.Reflector],
            },
        ],
    })
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
