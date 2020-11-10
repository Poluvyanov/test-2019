"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const actions_1 = require("../../actions");
const Registration_1 = __importDefault(require("../../components/desktop/Registration"));
exports.default = react_redux_1.connect(state => ({
    email: state.auth.registration.email,
    errors: state.auth.registration.errors,
    password: state.auth.registration.password,
    confirmPassword: state.auth.registration.confirmPassword,
}), dispatch => ({
    onRegister: () => dispatch(actions_1.register()),
    onChangeEmail: value => dispatch(actions_1.change('email', value)),
    onChangePassword: value => dispatch(actions_1.change('password', value)),
    onChangeConfirmPassword: value => dispatch(actions_1.change('confirmPassword', value)),
}))(Registration_1.default);
