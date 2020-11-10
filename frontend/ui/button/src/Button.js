"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_tools_1 = require("styled-tools");
const ButtonUi = styled_1.default('button')(({ theme }) => ({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '40px',
    padding: 0,
    border: 'none',
    borderRadius: theme.borderRadius.n,
    outline: 0,
    transition: '0.2s',
    cursor: 'pointer',
}), styled_tools_1.ifProp('text', ({ theme }) => ({
    fontFamily: theme.fontFamily.sf,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.s,
})));
exports.default = ButtonUi;
