"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const security_1 = require("@aunited/common/src/actions/security");
const Header_1 = __importDefault(require("../../components/desktop/Header"));
exports.default = react_redux_1.connect(state => ({
    firstName: state.me.profile.firstName,
    lastName: state.me.profile.lastName,
}), dispatch => ({
    onLogout: () => dispatch(security_1.logout()),
}))(Header_1.default);
