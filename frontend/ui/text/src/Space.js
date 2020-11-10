"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_1 = __importDefault(require("@emotion/styled"));
const Span = styled_1.default('span')(() => ({
    display: 'inline-flex',
}));
exports.Space = ({ count = 1 }) => react_1.createElement(Span, {
    children: '\u00A0'.repeat(count),
});
