"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reducer_1 = require("@utils/reducer");
const react_intl_1 = require("react-intl");
const ru_1 = __importDefault(require("react-intl/locale-data/ru"));
react_intl_1.addLocaleData(ru_1.default);
const initialState = {
    locale: 'ru',
};
exports.default = reducer_1.createReducer(initialState, {});
