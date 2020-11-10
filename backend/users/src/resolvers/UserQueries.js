"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const common_2 = require("@backend/common");
const roles_1 = require("@backend/roles");
const users_service_1 = require("../services/users.service");
const http_exception_1 = require("@nestjs/common/exceptions/http.exception");
let UserQueries = class UserQueries {
    constructor(userService) {
        this.userService = userService;
    }
    me(currentUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return currentUser;
        });
    }
    user(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findOneById(id);
            if (!user) {
                throw new http_exception_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            return user;
        });
    }
    users() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAll();
            if (!users || users.length < 1) {
                throw new http_exception_1.HttpException('Users not found', common_1.HttpStatus.NOT_FOUND);
            }
            return {
                rows: users,
                count: users.length,
            };
        });
    }
};
__decorate([
    common_2.AuthAccess(),
    graphql_1.Query(),
    __param(0, common_2.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserQueries.prototype, "me", null);
__decorate([
    common_2.ResourceAccess('profile', roles_1.ActionType.read, roles_1.PossessionType.any),
    graphql_1.Query(),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserQueries.prototype, "user", null);
__decorate([
    common_2.ResourceAccess('profile', roles_1.ActionType.read, roles_1.PossessionType.any),
    graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserQueries.prototype, "users", null);
UserQueries = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserQueries);
exports.UserQueries = UserQueries;
