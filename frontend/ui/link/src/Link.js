"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_tools_1 = require("styled-tools");
const text_1 = require("@ui/text");
const Link = styled_1.default(text_1.Text.withComponent('a'), {
    shouldForwardProp: prop => !['lineHeight', 'hoverColor', 'underline'].includes(prop),
})(({ theme, hoverColor }) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    [':hover']: {
        color: theme.colors[hoverColor],
    },
}), styled_tools_1.ifProp('underline', {
    textDecoration: 'underline',
    [':hover']: {
        textDecoration: 'none',
    },
}));
exports.default = Link;
