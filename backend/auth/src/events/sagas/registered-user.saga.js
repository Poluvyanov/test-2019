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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const operators_1 = require("rxjs/operators");
const registered_user_event_1 = require("../registered-user.event");
const SendEmailCommand_1 = require("../../commands/impl/SendEmailCommand");
let RegisteredUserSaga = class RegisteredUserSaga {
    constructor() {
        this.registered = (events$) => {
            return events$.pipe(cqrs_1.ofType(registered_user_event_1.RegisteredUserEvent), operators_1.map(event => new SendEmailCommand_1.SendEmailCommand(event.email)));
        };
    }
};
__decorate([
    cqrs_1.Saga(),
    __metadata("design:type", Object)
], RegisteredUserSaga.prototype, "registered", void 0);
RegisteredUserSaga = __decorate([
    common_1.Injectable()
], RegisteredUserSaga);
exports.RegisteredUserSaga = RegisteredUserSaga;
