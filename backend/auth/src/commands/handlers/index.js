"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterUserHandler_1 = require("./RegisterUserHandler");
const LoginUserHandler_1 = require("./LoginUserHandler");
const SendEmailHandler_1 = require("./SendEmailHandler");
exports.CommandHandlers = [
    RegisterUserHandler_1.RegisterUserHandler,
    LoginUserHandler_1.LoginUserHandler,
    SendEmailHandler_1.SendEmailHandler,
];
