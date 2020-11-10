"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_tools_1 = require("styled-tools");
const Button_1 = __importDefault(require("./Button"));
const Orange = styled_1.default(Button_1.default)(({ theme }) => ({
    color: theme.colors.white,
    border: `1px solid ${theme.colors.orange}`,
    backgroundColor: theme.colors.orange,
    boxShadow: '0 2px 4px 0 rgba(255, 168, 0, 0.3)',
    transition: 'ease-in 150ms',
}), styled_tools_1.ifProp('active', ({ theme }) => ({
    [':hover']: {
        color: theme.colors.ebony,
        boxShadow: '0 2px 6px 0 rgba(255, 168, 0, 0.7)',
    },
    [':active']: {
        color: theme.colors.ebony,
        boxShadow: '0 1px 2px 0 rgba(255, 168, 0, 0.3)',
    },
})), styled_tools_1.ifProp('disabled', ({ theme }) => ({
    cursor: 'default',
    color: theme.colors.blueHaze,
    background: theme.colors.white,
    border: `1px solid ${theme.colors.blueHaze}`,
    boxShadow: 'none !important',
})));
const Button = (_a) => {
    var { disabled, onClick, children } = _a, props = __rest(_a, ["disabled", "onClick", "children"]);
    return react_1.createElement(Orange, Object.assign({ type: 'button', disabled, active: !disabled, onClick: disabled ? null : onClick }, props), children);
};
Button.defaultProps = {
    onClick: () => { },
};
exports.default = Button;
