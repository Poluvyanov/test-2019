"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_intl_1 = require("react-intl");
const namespace = 'auth.registration';
exports.default = react_intl_1.defineMessages({
    registration: {
        id: `${namespace}.registration`,
        defaultMessage: 'Регистрация',
    },
    mail: {
        id: `${namespace}.mail`,
        defaultMessage: 'Почта',
    },
    enterEmail: {
        id: `${namespace}.enter_email`,
        defaultMessage: 'Введите ваш email',
    },
    password: {
        id: `${namespace}.password`,
        defaultMessage: 'Пароль',
    },
    enterPassword: {
        id: `${namespace}.enter_password`,
        defaultMessage: 'Введите пароль',
    },
    repeatPassword: {
        id: `${namespace}.repeat_password`,
        defaultMessage: 'Введите пароль повторно',
    },
    register: {
        id: `${namespace}.register`,
        defaultMessage: 'Зарегистрироваться',
    },
    login: {
        id: `${namespace}.login.login`,
        defaultMessage: 'Войти',
    },
});
