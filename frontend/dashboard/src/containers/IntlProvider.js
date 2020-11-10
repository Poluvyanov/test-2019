"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_intl_1 = require("react-intl");
const ru_1 = __importDefault(require("react-intl/locale-data/ru"));
const en_1 = __importDefault(require("react-intl/locale-data/en"));
react_intl_1.addLocaleData(ru_1.default);
react_intl_1.addLocaleData(en_1.default);
exports.default = ({ children }) => react_1.createElement(react_intl_1.IntlProvider, {
    defaultLocale: 'ru',
    locale: 'ru',
}, children);
