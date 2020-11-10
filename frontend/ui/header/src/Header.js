"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const Header = styled_1.default.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    minHeight: '40px',
    backgroundColor: theme.colors.white,
    boxShadow: '0 2px 4px 0 rgba(131, 144, 173, 0.15)',
}));
exports.default = Header;
