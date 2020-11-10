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
const cqrs_1 = require("@nestjs/cqrs");
const auth_service_1 = require("../../services/auth.service");
const common_1 = require("@nestjs/common");
const impl_1 = require("../impl");
const user_register_aggregate_1 = require("../../aggregates/user.register.aggregate");
let RegisterUserHandler = class RegisterUserHandler {
    constructor(authService, publisher) {
        this.authService = authService;
        this.publisher = publisher;
    }
    execute(command) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password, roleId } = command;
            const registerUser = yield this.authService.register({
                email,
                password,
                roleId,
            });
            const userAggregare = this.publisher.mergeObjectContext(yield new user_register_aggregate_1.UserRegisterAggregate());
            userAggregare.userRegister(email);
            userAggregare.commit();
            return registerUser;
        });
    }
};
RegisterUserHandler = __decorate([
    cqrs_1.CommandHandler(impl_1.RegisterUserCommand),
    __param(0, common_1.Inject(common_1.forwardRef(() => auth_service_1.AuthService))),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        cqrs_1.EventPublisher])
], RegisterUserHandler);
exports.RegisterUserHandler = RegisterUserHandler;
