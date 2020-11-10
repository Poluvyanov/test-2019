"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const reducers_1 = __importDefault(require("../pages/login/reducers"));
const reducers_2 = __importDefault(require("../pages/registration/reducers"));
exports.default = redux_1.combineReducers({
    login: reducers_1.default,
    registration: reducers_2.default,
});
