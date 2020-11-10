"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterUserCommand {
    constructor(email, password, roleId) {
        this.email = email;
        this.password = password;
        this.roleId = roleId;
    }
}
exports.RegisterUserCommand = RegisterUserCommand;
