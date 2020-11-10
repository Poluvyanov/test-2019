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
const Wrapper_1 = __importDefault(require("./Wrapper"));
const styled_1 = __importDefault(require("@emotion/styled"));
const styled_tools_1 = require("styled-tools");
const InputElement = styled_1.default('input', {
    shouldForwardProp: prop => !['borderColor', 'error', 'transparent', 'select'].includes(prop),
})(({ color, borderColor, theme }) => ({
    width: '100%',
    height: 40,
    boxSizing: 'border-box',
    borderRadius: `${theme.borderRadius.n}px`,
    outline: 'none',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors[borderColor]}`,
    paddingLeft: '20px',
    boxShadow: '0 2px 4px 0 rgba(41, 50, 70, 0.1)',
    transition: '100ms ease all',
    fontFamily: theme.fontFamily.sf,
    fontSize: `${theme.fontSizes.s}px`,
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.s,
    color: theme.colors[color],
    [':not([value=""])']: {
        boxShadow: 'none',
        borderColor: `${theme.colors.blueHaze}`,
    },
    [':hover']: {
        boxShadow: 'none',
        borderColor: `${theme.colors.blueHaze}`,
        backgroundColor: `${theme.colors.webWhite}`,
    },
    [':focus']: {
        boxShadow: '0 2px 6px 0 rgba(41, 50, 70, 0.4)',
        borderColor: `${theme.colors.lightGray}`,
        backgroundColor: `${theme.colors.white}`,
    },
}), styled_tools_1.ifProp('disabled', ({ theme }) => ({
    border: `1px solid ${theme.colors.blueHaze}`,
    color: `${theme.colors.blueHaze}`,
})), styled_tools_1.ifProp('error', ({ theme }) => ({
    borderColor: `${theme.colors.red}`,
    [':hover']: {
        borderColor: `${theme.colors.red}`,
    },
    [':focus']: {
        borderColor: `${theme.colors.red}`,
    },
})), styled_tools_1.ifProp('warning', ({ theme }) => ({
    borderColor: `${theme.colors.orange}`,
    [':hover']: {
        borderColor: `${theme.colors.orange}`,
    },
    [':focus']: {
        borderColor: `${theme.colors.orange}`,
    },
})), styled_tools_1.ifProp('transparent', {
    backgroundColor: 'transparent',
    border: 'none',
    [':hover']: {
        backgroundColor: 'transparent',
        border: 'none',
    },
    [':focus']: {
        backgroundColor: 'transparent',
        border: 'none',
    },
}));
const Input = (_a) => {
    var { id, type, disabled, value, placeholder, readOnly, onChange, onKeyPress, onEnter } = _a, props = __rest(_a, ["id", "type", "disabled", "value", "placeholder", "readOnly", "onChange", "onKeyPress", "onEnter"]);
    return react_1.createElement(Wrapper_1.default, {}, react_1.createElement(InputElement, Object.assign({ id,
        type,
        disabled,
        value,
        placeholder,
        readOnly, onChange: ({ target }) => onChange(target.value), onKeyPress: event => {
            if (event.key === 'Enter' && onEnter) {
                onEnter();
            }
            if (onKeyPress) {
                onKeyPress(event);
            }
        } }, props)));
};
Input.defaultProps = {
    color: 'blueBayoux',
    borderColor: 'lightGray',
    onChange: () => { },
};
exports.default = Input;
