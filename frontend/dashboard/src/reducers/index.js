"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const react_router_redux_1 = require("react-router-redux");
const security_1 = __importDefault(require("@aunited/common/src/reducers/security"));
const reducers_1 = __importDefault(require("@aunited/auth/src/reducers"));
const reducers_2 = __importDefault(require("@aunited/users/src/reducers"));
const config_1 = __importDefault(require("./config"));
const locale_1 = __importDefault(require("./locale"));
const me_1 = __importDefault(require("./me"));
exports.default = redux_1.combineReducers({
    auth: reducers_1.default,
    config: config_1.default,
    locale: locale_1.default,
    me: me_1.default,
    router: react_router_redux_1.routerReducer,
    security: security_1.default,
    users: reducers_2.default,
});
