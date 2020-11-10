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
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const impl_1 = require("../commands/impl");
const dto_1 = require("../dto");
let AuthMutations = class AuthMutations {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    login(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.commandBus.execute(new impl_1.LoginUserCommand(input.email, input.password));
                const { email, accessToken, expiresIn } = result;
                return { email, accessToken, expiresIn };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    register(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.commandBus.execute(new impl_1.RegisterUserCommand(input.email, input.password, input.roleId));
                const { success, message } = result;
                return {
                    success,
                    message: message.response || message,
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
};
__decorate([
    graphql_1.Mutation('login'),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], AuthMutations.prototype, "login", null);
__decorate([
    graphql_1.Mutation('register'),
    __param(0, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserRegisterDto]),
    __metadata("design:returntype", Promise)
], AuthMutations.prototype, "register", null);
AuthMutations = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], AuthMutations);
exports.AuthMutations = AuthMutations;
