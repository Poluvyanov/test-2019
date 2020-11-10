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
const dto_1 = require("../dto");
const common_1 = require("@nestjs/common");
const common_2 = require("@backend/common");
const roles_1 = require("@backend/roles");
const src_1 = require("@backend/common/src");
const cqrs_1 = require("@nestjs/cqrs");
const impl_1 = require("../commands/impl");
let UserMutations = class UserMutations {
    constructor(commandBus) {
        this.commandBus = commandBus;
    }
    updateProfile(currentUser, input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.commandBus.execute(new impl_1.UpdateProfileCommand(input.firstName, input.lastName, currentUser));
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
    src_1.AuthAccess(),
    common_2.ResourceAccess('profile', roles_1.ActionType.update, roles_1.PossessionType.own),
    graphql_1.Mutation('updateProfile'),
    __param(0, src_1.GetUser()), __param(1, graphql_1.Args('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.ProfileUpdateDto]),
    __metadata("design:returntype", Promise)
], UserMutations.prototype, "updateProfile", null);
UserMutations = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], UserMutations);
exports.UserMutations = UserMutations;
