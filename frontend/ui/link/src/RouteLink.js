"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Link_1 = __importDefault(require("./Link"));
const RouteLink = Link_1.default.withComponent(react_router_dom_1.Link);
exports.default = RouteLink;
