"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_tools_1 = require("styled-tools");
const styled_1 = __importDefault(require("@emotion/styled"));
const Text = styled_1.default.span(({ theme, lineHeight, color, size, weight }) => ({
    fontFamily: theme.fontFamily.sf,
    fontWeight: theme.fontWeights[weight],
    fontSize: theme.fontSizes[size],
    lineHeight: theme.lineHeights[lineHeight],
    color: theme.colors[color],
}), styled_tools_1.switchProp('display', {
    inline: {
        display: 'inline',
    },
    inlineFlex: {
        display: 'inline-flex',
        alignItems: 'center',
    },
}), styled_tools_1.switchProp('align', {
    left: {
        textAlign: 'left',
    },
    center: {
        textAlign: 'center',
    },
    right: {
        textAlign: 'right',
    },
}), styled_tools_1.switchProp('transform', {
    uppercase: {
        textTransform: 'uppercase',
    },
    lowercase: {
        textTransform: 'lowercase',
    },
}));
exports.Text = Text;
Text.defaultProps = {
    lineHeight: 'm',
    color: 'black',
    size: 'n',
    weight: 'normal',
    align: 'left',
    display: 'inlineFlex',
};
