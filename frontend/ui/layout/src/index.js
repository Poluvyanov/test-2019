"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@styled-system/core");
const styled_system_1 = require("styled-system");
const fill = (props) => styled_system_1.height({ height: props.fill ? '100%' : undefined });
const isNumber = n => typeof n === 'number' && !isNaN(n);
const getWidth = (n, scale) => core_1.get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
const getScale = (n, scale) => (scale ? scale[n] : getWidth(n, scale));
const flexBasis = styled_system_1.style({
    prop: 'flexBasis',
    alias: 'basis',
    key: 'space',
    transformValue: getScale,
});
const flexWrap = styled_system_1.style({ prop: 'flexWrap', alias: 'wrap' });
const flexGrow = styled_system_1.style({ prop: 'flexGrow', alias: 'grow' });
const flexShrink = styled_system_1.style({ prop: 'flexShrink', alias: 'shrink' });
const alignItems = styled_system_1.style({ prop: 'alignItems', alias: 'align' });
const justifyContent = styled_system_1.style({ prop: 'justifyContent', alias: 'justify' });
const shouldForwardProp = prop => !['fill', 'wrap'].includes(prop);
exports.Column = styled_1.default('div', { shouldForwardProp })({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}, alignItems, justifyContent, flexBasis, flexGrow, flexWrap, fill);
exports.Row = styled_1.default('div', { shouldForwardProp })({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
}, alignItems, justifyContent, flexBasis, flexGrow, flexWrap, fill);
const Layout = styled_1.default.div({
    display: 'flex',
}, alignItems, justifyContent, flexBasis, flexGrow, flexShrink);
exports.Layout = Layout;
Layout.defaultProps = {
    grow: 0,
    shrink: 0,
};
