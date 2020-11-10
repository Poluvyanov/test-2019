"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cqrs_1 = require("@nestjs/cqrs");
const registered_user_event_1 = require("../events/registered-user.event");
class UserRegisterAggregate extends cqrs_1.AggregateRoot {
    constructor() {
        super();
    }
    userRegister(email) {
        this.apply(new registered_user_event_1.RegisteredUserEvent(email));
    }
}
exports.UserRegisterAggregate = UserRegisterAggregate;
