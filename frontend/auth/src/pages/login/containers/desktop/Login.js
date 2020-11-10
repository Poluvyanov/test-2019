"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const actions_1 = require("../../actions");
const Login_1 = __importDefault(require("../../components/desktop/Login"));
exports.default = react_redux_1.connect(state => ({
    email: state.auth.login.email,
    password: state.auth.login.password,
    errors: state.auth.login.errors,
}), dispatch => ({
    onChangeEmail: value => dispatch(actions_1.change('email', value)),
    onChangePassword: value => dispatch(actions_1.change('password', value)),
    onLogin: () => dispatch(actions_1.login()),
}))(Login_1.default);
