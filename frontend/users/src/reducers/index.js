"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const list_1 = __importDefault(require("./list"));
exports.default = redux_1.combineReducers({
    list: list_1.default,
});
